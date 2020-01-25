import React, { Component } from 'react'

export default class UserPreview extends Component {
    onAddMember=()=>{
        this.props.onAddMember(this.props.member)
    }
    render() {
        return (
            <React.Fragment>
                <p onClick={this.onAddMember}> {this.props.member.email}</p>
            </React.Fragment>
        )
    }
}
