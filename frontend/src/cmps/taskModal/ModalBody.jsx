import React, { Component } from 'react'
import ModalMain from './ModalMain';
import ModalSideBar from './ModalSideBar';

export default class ModalBody extends Component {


    render() {
        const { task, board, addMemberToTask, addLabelToTask, deleteTask, cloneTask } = this.props;
        if (!board) return 'loading..';
        //const { topic } = this.props;
        return (
            <div className="modal-body flex">
                <ModalMain
                    task={task}
                    getInitials={this.props.getInitials} />

                <ModalSideBar
                    task={task}
                    board={board}
                    addDueTimeToTask={this.props.addDueTimeToTask}
                    addMemberToTask={addMemberToTask}
                    addLabelToTask={addLabelToTask}
                    getInitials={this.props.getInitials}
                    deleteTask={deleteTask}
                    cloneTask={cloneTask} />
            </div>
        )
    }
}
