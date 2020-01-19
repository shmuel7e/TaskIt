import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TaskPreview extends Component {
    render() {
        return (
            <Link to={`topic/${this.props.topicId}/${this.props.task.id}`}>
            <li className='task-container'>
                <div className="task-title">{this.props.task.title}
                </div>
            </li>
            </Link>
        )
    }
}
