import React, { Component } from 'react'
import ToolBar from './modalSideBar/ToolBar'
import ActionBar from './modalSideBar/ActionBar'

export default class ModalSideBar extends Component {


    render() {
        const {board, addMemberToTask, deleteTask, cloneTask } = this.props;
        return (
            <div className='modal-sidebar-container flex  column justify-between'>

                <ToolBar 
                board={board} 
                addMemberToTask={addMemberToTask} 
                />

                <ActionBar 
                deleteTask={deleteTask}
                cloneTask={cloneTask}
                />
            </div>
        )
    }
}
