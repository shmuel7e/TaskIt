import React, { Component } from 'react'
import MembersPreview from './MembersPreview'

export default class MembersList extends Component {



    render() {
        if (!this.props.members) return 'loading...';
        return (
            <div className="members-list-modal">
                <h3>Board Members</h3>
                {this.props.members.map((member, idx) => {
                    return <MembersPreview member={member} key={idx} addMemberToTask={this.props.addMemberToTask} />
                })}
            </div>
        )
    }
}
