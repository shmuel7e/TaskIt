import React, { Component } from 'react'

export default class MembersPreview extends Component {

    // componentDidMount() {
    //     console.log(this.props.addMembersToTask);
    // }

    onAddMemberToTask = () => {
        this.props.addMemberToTask(this.props.member);
    }

    getInitials = (fullName) => {
        var initials = fullName.match(/\b\w/g);
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;

    }

    render() {
        if (!this.props.member) return 'loading..';
        return (
            <div className="side-modal-member" onClick={this.onAddMemberToTask}>
                <span style={{ background: this.props.member.bgColor }} className="member-name-initials">{this.getInitials(this.props.member.username)} </span> {this.props.member.username}
            </div>
        )
    }
}
