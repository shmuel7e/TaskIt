import React, { Component } from 'react'
import ToolBar from './modalSideBar/ToolBar'
import ActionBar from './modalSideBar/ActionBar'

export default class ModalSideBar extends Component {


    render() {
        return (
<<<<<<< HEAD
            <div className='modal-sidebar-container flex column justify-between'>
                <ToolBar board={this.props.board} />
=======
            <div className='modal-sidebar-container flex  column justify-between'>
                <ToolBar board={this.props.board} addMemberToTask={this.props.addMemberToTask} />
>>>>>>> b014c00c4a56d94579c94e01f9745a3c1d3e1483
                <ActionBar />
            </div>
        )
    }
}
