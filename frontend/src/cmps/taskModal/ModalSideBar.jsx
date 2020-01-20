import React, { Component } from 'react'
import ToolBar from './modalSideBar/ToolBar'
import ActionBar from './modalSideBar/ActionBar'

export default class ModalSideBar extends Component {
    render() {
        return (
            <div className='modal-sidebar-container flex column justify-between'>
                <ToolBar board={this.props.board} />
                <ActionBar />
            </div>
        )
    }
}
