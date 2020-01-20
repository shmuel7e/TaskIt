import React, { Component } from 'react'

export default class MembersPreview extends Component {

    render() {
        if (!this.props.member) return 'loading..';
        return (
            <div>
                {this.props.member.username}
            </div>
        )
    }
}
