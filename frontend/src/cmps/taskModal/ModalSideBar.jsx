import React, { Component } from 'react'
import ToolBar from './modalSideBar/ToolBar'
import ActionBar from './modalSideBar/ActionBar'

export default class ModalSideBar extends Component {


    render() {
        const {board, addMemberToTask, deleteTask, cloneTask, getInitials } = this.props;
        return (
            <div className='modal-sidebar-container flex  column justify-between'>
                <ToolBar 
                board={board} 
                addMemberToTask={addMemberToTask} 
                getInitials={getInitials} />

                <ActionBar 
                deleteTask={deleteTask}
                cloneTask={cloneTask}
                />
            </div>
        )
    }
}
