import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TaskPreview extends Component {

    onGetInitials = (fullName) => {
        return this.props.getInitials(fullName);
    }

    render() {
        return (
            <Link to={`topic/${this.props.topicId}/${this.props.task.id}`}>
                <li className='task-container' style={{ background: this.props.task.bgColor}}>
                    <div className="task-title">{this.props.task.title}
                    </div>
                    <div className='members-container flex'> {this.props.task.members.map((member, idx) => {
                        return <span style={{ background: member.bgColor }} data-toggle="tooltip" title={member.username}
                            className="member-name-initials" key={idx}>{this.onGetInitials(member.username)} </span>
                    })}
                    </div>
                    <div className='labels-container flex'> {this.props.task.labels.map((label, idx) => {
                        return <span style={{ background: label.color }} data-toggle="tooltip" title={label.name}
                            className="label-name-initials smaller" key={idx}> </span>
                    })}
                    </div>
                </li>
            </Link>
        )
    }
}
