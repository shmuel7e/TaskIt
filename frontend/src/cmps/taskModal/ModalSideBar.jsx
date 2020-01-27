import React, { Component } from 'react'
import ToolBar from './modalSideBar/ToolBar'
import ActionBar from './modalSideBar/ActionBar'

export default class ModalSideBar extends Component {


    render() {
        const { board, addMemberToTask,addChecklist, addLabelToTask, deleteTask, cloneTask, getInitials, changeTaskColor,onUploadImg } = this.props;
        return (
            <div className='modal-sidebar-container flex column'>
                <ToolBar
                    board={board}
                    addDueTimeToTask={this.props.addDueTimeToTask}
                    addMemberToTask={addMemberToTask}
                    addLabelToTask={addLabelToTask}
                    getInitials={getInitials}
                    addChecklist = {addChecklist}
                    onUploadImg={onUploadImg}
                     />

                <ActionBar
                    changeTaskColor={changeTaskColor}
                    deleteTask={deleteTask}
                    cloneTask={cloneTask}
                />
            </div>
        )
    }
}
