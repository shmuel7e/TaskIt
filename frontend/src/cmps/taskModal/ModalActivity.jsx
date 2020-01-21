import React, { Component } from 'react'

export default class ModalActivity extends Component {


    onGetInitials = (userName) => {
        return this.props.getInitials(userName);
    }


    render() {
        return (
            <div>
                <h3 className="members-on-task-title">Members</h3>
                <div className="members-on-task flex">
                    {this.props.task.members.map((member, idx) => {
                        return <div style={{ background: member.bgColor }} data-toggle="tooltip" title={member.username} className="member-name-initials" key={idx}>  {this.onGetInitials(member.username)} </div>
                    })}
                </div>

                <h3 className="members-on-task-title">Labels</h3>
                <div className="labels-on-task flex">
                    {this.props.task.labels.map((label, idx) => {
                        return <div style={{ background: label.color }} data-toggle="tooltip" title={label.name} className="label-name-initials" key={idx}> </div>
                    })}
                </div>

            </div>
        )
    }
}
