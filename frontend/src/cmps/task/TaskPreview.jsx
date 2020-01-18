import React, { Component } from 'react'

export default class TaskPreview extends Component {
    render() {
        return (
            <li className='task-container'>
                <div className="task-title">{this.props.task.title}
                </div>
            </li>
        )
    }
}
