import React, { Component } from 'react'
import ModalMain from './ModalMain';
import ModalSideBar from './ModalSideBar';

export default class ModalBody extends Component {


    render() {
        const { task,
                board,
                addTodo,
                cloneTask,
                changeTodo,
                deleteTodo,
                deleteTask,
                getInitials,
                addChecklist,
                changeTaskDesc,
                addLabelToTask,
                addMemberToTask,
                deleteChecklist,
                changeTaskColor,
                addDueTimeToTask,
                addActivityComment,
                onUploadImg
               } = this.props;

        if (!board) return 'loading..';
        return (
            <div className="modal-body flex">
                <ModalMain
                    task={task}
                    addTodo={addTodo}
                    changeTodo={changeTodo}
                    deleteTodo={deleteTodo}
                    getInitials={getInitials}
                    changeTaskDesc={changeTaskDesc}
                    deleteChecklist={deleteChecklist}
                    addActivityComment={addActivityComment}
                />

                <ModalSideBar
                    task={task}
                    board={board}
                    cloneTask={cloneTask}
                    deleteTask={deleteTask}
                    getInitials={getInitials}
                    addChecklist={addChecklist}
                    addLabelToTask={addLabelToTask}
                    addMemberToTask={addMemberToTask}
                    addDueTimeToTask={addDueTimeToTask}
                    changeTaskColor={changeTaskColor}
                    onUploadImg={onUploadImg}
                />
            </div>
        )
    }
}
