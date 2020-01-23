import React, { Component } from 'react'
import ModalMain from './ModalMain';
import ModalSideBar from './ModalSideBar';

export default class ModalBody extends Component {


    render() {
        const { task, board, addMemberToTask, addLabelToTask, deleteTask, cloneTask, changeTaskColor, changeTodo,getInitials ,addDueTimeToTask} = this.props;
        if (!board) return 'loading..';
        return (
            <div className="modal-body flex">
                <ModalMain
                    task={task}
                    changeTodo = {changeTodo}
                    getInitials={getInitials} />

                <ModalSideBar
                    task={task}
                    board={board}
                    addDueTimeToTask={addDueTimeToTask}
                    addMemberToTask={addMemberToTask}
                    addLabelToTask={addLabelToTask}
                    getInitials={getInitials}
                    changeTaskColor={changeTaskColor}
                    deleteTask={deleteTask}
                    cloneTask={cloneTask} />
            </div>
        )
    }
}
