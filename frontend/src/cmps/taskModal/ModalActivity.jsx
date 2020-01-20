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
                        return <div style={{ background: member.bgColor }} className="member-name-initials" key={idx}>  {this.onGetInitials(member.username)} </div>
                    })}
                </div>
            </div>
        )
    }
}
