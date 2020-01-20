import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setCurrTask, setCurrTopic , updateTask } from '../actions/BoardActions';
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

    changeTaskTitle = (topic,task,newTxt) => {
        task.title = newTxt;
        this.props.updateTask(topic,task);
    } 

    render() {
        const { task } = this.props;
        const { topic } = this.props;
        if (!task) return 'Loading...'
        return (
            <div className="widow-screen" onClick={this.closeModal}>
                <div onClick={this.stayInModal} className='task-modal-container'>
                    <ModalHeader task={task} topic={topic} closeModal={this.closeModal} changeTaskTitle={this.changeTaskTitle}/>
                    <ModalBody task={task} topic={topic}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        task: state.board.currTask,
        topic: state.board.currTopic
    };
};
const mapDispatchToProps = {
    setCurrTopic,
    setCurrTask,
    updateTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);