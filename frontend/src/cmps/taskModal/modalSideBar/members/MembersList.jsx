import React, { Component } from 'react'
import MembersPreview from './MembersPreview'

export default class MembersList extends Component {


    render() {
        if (!this.props.members) return 'loading...';
        return (
            <div>
                <h3>Board Members</h3>
                {this.props.members.map((member, idx) => {
                    return <MembersPreview member={member} key={idx} />
                })}
            </div>
        )
    }
}
