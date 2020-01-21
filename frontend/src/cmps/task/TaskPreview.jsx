import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TaskPreview extends Component {

    onGetInitials = (fullName) => {

        return this.props.getInitials(fullName);
    }

    render() {
        return (
            <Link to={`topic/${this.props.topicId}/${this.props.task.id}`}>
                <li className='task-container'>
                    <div className="task-title">{this.props.task.title}
                    </div>
                    <div className='members-container flex'> {this.props.task.members.map((member, idx) => {
                        return <span style={{ background: member.bgColor }} data-toggle="tooltip" title={member.username}
                            className="member-name-initials" key={idx}>{this.onGetInitials(member.username)} </span>
                    })}
                    </div>
                </li>
            </Link>
        )
    }
}
