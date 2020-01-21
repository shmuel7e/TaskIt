import React, { Component } from 'react'
import TaskColorList from './TaskColorList'

export default class TaskColorModal extends Component {

    onCloseModal = () => {
        this.props.closeModal();
    }

    render() {
        return (
            <div className='color-modal'>
                <div className="color-modal-header">
                    <h3>colors</h3>
                    <div className="close-btn-container">
                    <span className='icon-cross' onClick={this.onCloseModal}></span>
                    </div>
                </div>
                <TaskColorList changeTaskColor={this.props.changeTaskColor} />
            </div>
        )
    }
}
