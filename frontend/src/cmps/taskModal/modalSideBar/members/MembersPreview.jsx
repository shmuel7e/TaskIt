import React, { Component } from 'react'

export default class MembersPreview extends Component {

    onAddMemberToTask = () => {
        this.props.addMemberToTask(this.props.member);
    }

    onGetInitials = () => {
        return this.props.getInitials(this.props.member.username);
    }

    render() {
        if (!this.props.member) return 'loading..';
        return (
            <div className="side-modal-member" onClick={this.onAddMemberToTask}>
                <span style={{ background: this.props.member.bgColor }} className="member-name-initials">{this.onGetInitials()} </span> {this.props.member.username}
            </div>
        )
    }
}
