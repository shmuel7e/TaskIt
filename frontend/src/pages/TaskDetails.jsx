import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    loadBoard,
    setCurrTask,
    setCurrTopic,
    updateTask,
    deleteTask,
    cloneTask,
    addChecklist,
    addTodo,
    addActivityComment,
    updateActivity,
    setCurrBoard
} from '../actions/BoardActions';
import ModalHeader from '../cmps/taskModal/ModalHeader.jsx';
import ModalBody from '../cmps/taskModal/ModalBody.jsx';
import UtilsService from '../services/UtilsService';
import BoardService from '../services/BoardService.js'
import SocketService from '../services/SocketService.js'
class TaskDetails extends Component {

    componentDidMount() {
        this.loadTask();
        SocketService.setup();
        SocketService.on('user changes', async (msg) => {
            this.onAddActivity(msg);
            const board = await BoardService.getBoard(this.props.board._id)
            await this.props.setCurrBoard(board)
            this.loadTask();
        });
    }


    async componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id || !this.props.board) {
            this.loadTask();
        }
    }

    componentWillUnmount = () => {
        SocketService.terminate();
        // SocketService.off('user joined the board');
    }
    onAddActivity = (activityName) => {
        let date = new Date;
        date = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        let addedActivity = { activityName: activityName, createdAt: date };
        if (this.props.board) this.props.updateActivity(addedActivity, { ...this.props.board });
    }

    loadTask() {
        const { topicId, taskId } = this.props.match.params;
        this.props.setCurrTopic(topicId);
        this.props.setCurrTask(taskId);
    }

    closeModal = () => {
        this.props.history.push('/topic/' + this.props.board._id)
    }

    stayInModal = (ev) => {
        ev.stopPropagation();
    }

    changeTaskTitle = async (topic, task, newTxt) => {
        task.title = newTxt;
        await this.props.updateTask(topic, task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
        SocketService.emit('user changes', this.props.user.username + ' has changed task title');
    }

    addMemberToTask = async (member) => {
        const { members } = this.props.task;
        const addedMember = members.find(({ _id }) => _id === member._id);
        (!addedMember) ? members.push(member) : members.pop(member);
        await this.props.updateTask(this.props.topic, this.props.task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
        SocketService.emit('user changes', this.props.user.username + ' has added member to task');
    }

    addLabelToTask = async (label) => {
        const { labels } = this.props.task;
        const addedLabel = labels.find(({ name }) => name === label.name);
        (!addedLabel) ? labels.push(label) : labels.pop(label);
        await this.props.updateTask(this.props.topic, this.props.task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
        SocketService.emit('user changes', this.props.user.username + ' has added label to task');
    }

    addDueTimeToTask = async (dueTime) => {
        this.props.task.dueTime = dueTime;
        await this.props.updateTask(this.props.topic, this.props.task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
        SocketService.emit('user changes', this.props.user.username + ' has added due time to task');

    }

    getInitials = (fullName) => {
        return UtilsService.getInitials(fullName);
    }

    deleteTask = async () => {
        await this.props.deleteTask(this.props.task.id)
        BoardService.updateBoard(this.props.board)
        SocketService.emit('user changes', this.props.user.username + ' has deleted task');
        this.props.history.push('/topic/' + this.props.board._id);
    }

    cloneTask = async () => {
        await this.props.cloneTask(this.props.topic.id, this.props.task)
        BoardService.updateBoard(this.props.board)
        SocketService.emit('user changes', this.props.user.username + ' has clone task');
        this.props.history.push('/topic/' + this.props.board._id);
    }

    changeTaskColor = async (color) => {
        const updateTask = this.props.task.bgColor = color;
        await this.props.updateTask(this.props.topic, updateTask);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
        SocketService.emit('user changes', this.props.user.username + ' has changed color to task');
    }

    changeTodo = async (checkList, updatedTodo) => {
        let updatedCheckList = checkList.todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo)
        let updatedtask = this.props.task.checkList.map(checkList =>
            checkList.id === updatedCheckList.id ? updatedCheckList : checkList)
        await this.props.updateTask(this.props.topic, updatedtask);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
    }

    addTodo = async (checkList, todoTitle) => {
        const { topic, task } = this.props;
        await this.props.addTodo(topic, task, checkList, todoTitle);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
        SocketService.emit('user changes', this.props.user.username + 'has changed check list to task');
    }

    addChecklist = async (checkListTitle) => {
        const { topic, task } = this.props;
        await this.props.addChecklist(topic, task, checkListTitle);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
        SocketService.emit('user changes', this.props.user.username + ' has added check list to task');
    }
    addActivityComment = async (activityTxt) => {
        const { topic, task } = this.props;
        const activityCommen = {
            user: this.props.user,
            txt: activityTxt,
            date: new Date
        }
        await this.props.addActivityComment(topic, task, activityCommen)
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
       SocketService.emit('user changes', this.props.user.username + ' has added activity comment to task');
    }

    changeTaskDesc = async (newTxt) => {
        this.props.task.description = newTxt;
        await this.props.updateTask(this.props.topic, this.props.task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
        SocketService.emit('user changes', this.props.user.username + ' has changed description to task');
    }

    deleteChecklist = async (checklist) => {
    const filteredChecklists = this.props.task.checkList.filter(currCheckList => currCheckList.id !== checklist.id);
    this.props.task.checkList = filteredChecklists;
    await this.props.updateTask(this.props.topic, this.props.task);
    BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id);
    SocketService.emit('user changes', this.props.user.username + 'has deleted checklist');
    }

    deleteTodo = async (checkList,todo) => {
        const filteredTodos = checkList.todos.filter(currTodo => currTodo.id !== todo.id);
        checkList.todos = filteredTodos;
        let updatedtask = this.props.task.checkList.map(currCheckList =>
            currCheckList.id === checkList.id ? checkList : currCheckList)
        await this.props.updateTask(this.props.topic, updatedtask);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id);
        SocketService.emit('user changes', this.props.user.username + 'has deleted todo');

        

    }

    render() {
        const { board } = this.props;
        const { task, topic } = this.props;
        if (!board) return 'Loading...';
        if (!task) return 'Loading...';
        return (
            <div className="widow-screen" onClick={this.closeModal}>
                <div onClick={this.stayInModal} className='task-modal-container'>
                    <ModalHeader
                        task={task}
                        topic={topic}
                        closeModal={this.closeModal}
                        changeTaskTitle={this.changeTaskTitle} />

                    <ModalBody
                        task={task}
                        topic={topic}
                        board={board}
                        addTodo={this.addTodo}
                        cloneTask={this.cloneTask}
                        changeTodo={this.changeTodo}
                        deleteTask={this.deleteTask}
                        deleteTodo={this.deleteTodo}
                        getInitials={this.getInitials}
                        addChecklist={this.addChecklist}
                        addLabelToTask={this.addLabelToTask}
                        changeTaskDesc={this.changeTaskDesc}
                        addMemberToTask={this.addMemberToTask}
                        changeTaskColor={this.changeTaskColor}
                        deleteChecklist={this.deleteChecklist}
                        addDueTimeToTask={this.addDueTimeToTask}
                        addActivityComment={this.addActivityComment}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        task: state.board.currTask,
        topic: state.board.currTopic,
        board: state.board.board,
        user: state.user.loggedInUser
    };
};
const mapDispatchToProps = {
    loadBoard,
    addChecklist,
    setCurrTopic,
    setCurrTask,
    updateTask,
    deleteTask,
    cloneTask,
    addTodo,
    addActivityComment,
    updateActivity,
    setCurrBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);