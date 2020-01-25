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
    addActivityComment
} from '../actions/BoardActions';
import ModalHeader from '../cmps/taskModal/ModalHeader.jsx';
import ModalBody from '../cmps/taskModal/ModalBody.jsx';
import UtilsService from '../services/UtilsService';
import BoardService from '../services/BoardService.js'
class TaskDetails extends Component {

    componentDidMount() {
        this.loadTask();
    }


    async componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id || !this.props.board) {
            this.loadTask();
        }
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
    }

    addMemberToTask = async (member) => {
        const { members } = this.props.task;
        const addedMember = members.find(({ _id }) => _id === member._id);
        (!addedMember) ? members.push(member) : members.pop(member);
        await this.props.updateTask(this.props.topic, this.props.task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
    }

    addLabelToTask = async (label) => {
        const { labels } = this.props.task;
        const addedLabel = labels.find(({ name }) => name === label.name);
        (!addedLabel) ? labels.push(label) : labels.pop(label);
        await this.props.updateTask(this.props.topic, this.props.task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
    }

    addDueTimeToTask = async (dueTime) => {
        this.props.task.dueTime = dueTime;
        await this.props.updateTask(this.props.topic, this.props.task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)

    }

    getInitials = (fullName) => {
        return UtilsService.getInitials(fullName);
    }

    deleteTask = async () => {
        await this.props.deleteTask(this.props.task.id)
        BoardService.updateBoard(this.props.board)
        this.props.history.push('/topic/' + this.props.board._id);
    }

    cloneTask = async () => {
        await this.props.cloneTask(this.props.topic.id, this.props.task)
        BoardService.updateBoard(this.props.board)
        this.props.history.push('/topic/' + this.props.board._id);
    }

    changeTaskColor = async (color) => {
        const updateTask = this.props.task.bgColor = color;
        await this.props.updateTask(this.props.topic, updateTask);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
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
    }

    addChecklist = async (checkListTitle) => {
        const { topic, task } = this.props;
        await this.props.addChecklist(topic, task, checkListTitle);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
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
    }

    changeTaskDesc = async (newTxt) => {
        this.props.task.description = newTxt;
        await this.props.updateTask(this.props.topic, this.props.task);
        console.log(this.props.task);
        BoardService.updateTask(this.props.task, this.props.board._id, this.props.topic.id)
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
                        getInitials={this.getInitials}
                        addChecklist={this.addChecklist}
                        addLabelToTask={this.addLabelToTask}
                        changeTaskDesc={this.changeTaskDesc}
                        addMemberToTask={this.addMemberToTask}
                        changeTaskColor={this.changeTaskColor}
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
    addActivityComment
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);