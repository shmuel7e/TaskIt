import React, { Component } from 'react'
import ModalMain from './ModalMain';
import ModalSideBar from './ModalSideBar';

export default class ModalBody extends Component {


    render() {
        const { task, board, addMemberToTask, addLabelToTask,addChecklist, deleteTask, cloneTask, changeTaskColor,addTodo, changeTodo,getInitials ,addDueTimeToTask} = this.props;
        if (!board) return 'loading..';
        return (
            <div className="modal-body flex">
                <ModalMain
                    task={task}
                    addTodo = {addTodo}
                    changeTodo = {changeTodo}
                    getInitials={getInitials} />

                <ModalSideBar
                    task={task}
                    board={board}
                    cloneTask={cloneTask}
                    deleteTask={deleteTask}
                    getInitials={getInitials}
                    addChecklist = {addChecklist}
                    addLabelToTask={addLabelToTask}
                    addMemberToTask={addMemberToTask}
                    addDueTimeToTask={addDueTimeToTask}
                    changeTaskColor={changeTaskColor}
                     />
            </div>
        )
    }
}
