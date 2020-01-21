import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setCurrTask, setCurrTopic, updateTask, deleteTask, cloneTask } from '../actions/BoardActions';
import ModalHeader from '../cmps/taskModal/ModalHeader.jsx';
import ModalBody from '../cmps/taskModal/ModalBody.jsx';

class TaskDetails extends Component {

    componentDidMount() {
        this.loadTask();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadTask();
        }
    }

    loadTask() {
        const { topicId, taskId } = this.props.match.params;
        this.props.setCurrTopic(topicId);
        this.props.setCurrTask(taskId);

    }

    closeModal = () => {
        this.props.history.push('/topic')
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
        const result = members.find(({ _id }) => _id === member._id);
        (!result) ? members.push(member) : members.pop(member);
        this.props.updateTask(this.props.topic, this.props.task);
    }

    getInitials = (fullName) => {
        var initials = fullName.match(/\b\w/g);
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }
    
    deleteTask = () => {
        this.props.deleteTask(this.props.task.id)
        this.props.history.push('/topic');
    }

    cloneTask = () => {
        this.props.cloneTask(this.props.topic.id, this.props.task)
        this.props.history.push('/topic');
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
                    getInitials={this.getInitials}
                    addMemberToTask={this.addMemberToTask} 
                    deleteTask = {this.deleteTask}
                    cloneTask= {this.cloneTask}/>
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
    setCurrTopic,
    setCurrTask,
    updateTask,
    deleteTask,
    cloneTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);