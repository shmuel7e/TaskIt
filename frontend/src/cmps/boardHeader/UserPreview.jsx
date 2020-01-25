import React, { Component } from 'react'

export default class UserPreview extends Component {
    onAddMember=()=>{
        this.props.onAddMember(this.props.member)
        this.props.toggleUsersModal();
    }
    render() {
        return (
            <React.Fragment>
                <div className='user-container' onClick={this.onAddMember}> {this.props.member.email}</div>
            </React.Fragment>
        )
    }
}
