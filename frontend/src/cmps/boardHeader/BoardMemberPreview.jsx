import React, { Component } from 'react';
import UtilsService from '../../services/UtilsService';

export default class BoardMemberPreview extends Component {

    onGetInitials = (fullName) => {
        return UtilsService.getInitials(fullName);
    }

    render() {
        const { member } = this.props
        return (
            <div>
                <div className="member-name-initials"
                    style={{ background: member.bgColor }}
                    data-toggle="tooltip" title={member.username}>
                    {this.onGetInitials(member.username)}</div>
            </div>
        )
    }
}
