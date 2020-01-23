import React, { Component } from 'react'
import { connect } from 'react-redux';
import {loadBoard, setCurrTask, setCurrTopic, updateTask, deleteTask, cloneTask,addChecklist, addTodo } from '../actions/BoardActions';
import ModalHeader from '../cmps/taskModal/ModalHeader.jsx';
import ModalBody from '../cmps/taskModal/ModalBody.jsx';
import UtilsService from '../services/UtilsService';

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
        this.props.history.push('/topic/'+this.props.board._id)
    }

    stayInModal = (ev) => {
        ev.stopPropagation();
    }

    changeTaskTitle = (topic, task, newTxt) => {
        task.title = newTxt;
        this.props.updateTask(topic, task);
    }

    addMemberToTask = (member) => {
        const { members } = this.props.task;
        const addedMember = members.find(({ _id }) => _id === member._id);
        (!addedMember) ? members.push(member) : members.pop(member);
        this.props.updateTask(this.props.topic, this.props.task);
    }

    addLabelToTask = (label) => {
        const { labels } = this.props.task;
        const addedLabel = labels.find(({ name }) => name === label.name);
        (!addedLabel) ? labels.push(label) : labels.pop(label);
        this.props.updateTask(this.props.topic, this.props.task);
    }

    addDueTimeToTask = (dueTime) => {
        this.props.task.dueTime = dueTime;
        this.props.updateTask(this.props.topic, this.props.task);
    }

    getInitials = (fullName) => {
        return UtilsService.getInitials(fullName);
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id)
        this.props.history.push('/topic');
    }

    cloneTask = () => {
        this.props.cloneTask(this.props.topic.id, this.props.task)
        this.props.history.push('/topic');
    }

    changeTaskColor = (color) => {
        const updateTask = this.props.task.bgColor = color;
        this.props.updateTask(this.props.topic, updateTask);
    }

    changeTodo = (checkList, updatedTodo) => {
        let updatedCheckList = checkList.todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo)
        let updatedtask = this.props.task.checkLists.map(checkList =>
            checkList.id === updatedCheckList.id ? updatedCheckList : checkList)
        this.props.updateTask(this.props.topic, updatedtask);
    }

    addTodo = (checkList, todoTitle) => {
        const { topic, task } = this.props;
        this.props.addTodo(topic, task, checkList, todoTitle);
    }

    addChecklist = (checkListTitle) => {
        const { topic, task } = this.props;
        this.props.addChecklist(topic, task, checkListTitle);
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
                        addChecklist = {this.addChecklist}
                        addLabelToTask={this.addLabelToTask}
                        addMemberToTask={this.addMemberToTask}
                        addDueTimeToTask={this.addDueTimeToTask}
                        changeTaskColor={this.changeTaskColor} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        task: state.board.currTask,
        topic: state.board.currTopic,
        board: state.board.board
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
    addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);