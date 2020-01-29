import React, { Component } from 'react';
import UtilsService from '../../services/UtilsService';

export default class BoardMemberPreview extends Component {
    state = { isModalShown: false }
    onGetInitials = (fullName) => {
        return UtilsService.getInitials(fullName);
    }
    isModalShown = () => {
        let isModalShown = !this.state.isModalShown
        this.setState({ isModalShown })
    }

    render() {
        const { member } = this.props
        return (
            <div className="boardMember-container">
                <div onClick={this.isModalShown} className="member-name-initials"
                    style={{ background: member.bgColor }}
                    data-toggle="tooltip" title={member.username}>
                    {this.onGetInitials(member.username)}
                    {this.state.isModalShown
                    ? <div className="member-mini-menu">
                        <div >Delete</div>
                    </div> : ''}
                </div>
                
            </div>
        )
    }
}
