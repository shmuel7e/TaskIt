import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setCurrTask, setCurrTopic } from '../actions/BoardActions';

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

    onCloseModal = () => {
        this.props.history.push('/topic')
    }

    stayInModal = (ev) => {
        ev.stopPropagation();
    }

    onTxtChange = (editedTxt) => {
        console.log(editedTxt)
    }


    render() {
        const { task } = this.props;
        const { topic } = this.props;
        if (!task) return 'Loading...'
        return (
            <div className="widow-screen" onClick={this.onCloseModal}>
                <div onClick={this.stayInModal} className='task-modal-container'>

                    <div className="modal-header">
                        <span className='icon-cross' onClick={this.onCloseModal}></span>
                        <span className="icon-window"></span>
                        <div className="modal-txt title" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}>{task.title}</div>
                        <small>In list <span className="bottom-line">{topic.title}</span></small>
                    </div>

                    <div className="modal-body">
                        <span className="icon-paragraph-left"></span>
                        <span class="icon-message"></span>
                        <div className="sub-title">Description</div>
                        <div className="modal-txt description" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}>{task.description}</div>
                        <div className="sub-title">Activity</div>
                    </div>
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
    setCurrTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);