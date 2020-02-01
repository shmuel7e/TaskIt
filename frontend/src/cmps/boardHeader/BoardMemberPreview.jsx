import React, { Component } from 'react';
import UtilsService from '../../services/UtilsService';

export default class BoardMemberPreview extends Component {
    state = { isModalShown: false }
    onGetInitials = (fullName) => {
        return UtilsService.getInitials(fullName);
    }
    isModalShown = (ev) => {
        let isModalShown = !this.state.isModalShown
        this.setState({ isModalShown })
    }
    onRemoveUser = () => {
        this.props.onRemoveUser()
    }

    render() {
        const { member } = this.props
        return (
            <div className="boardMember-container">
                <div onClick={this.isModalShown} className="member-name-initials-board"
                    style={{ background: member.bgColor }}
                    data-toggle="tooltip" title={member.username}
                >
                    {this.onGetInitials(member.username)}
                    {this.state.isModalShown && member._id === this.props.user._id
                        && <div className="member-mini-menu">
                            <p
                                onClick={this.onRemoveUser}
                                data-toggle="tooltip"
                                title="remove from board">
                                remove
                             </p>
                        </div>
                    }
                    {this.state.isModalShown && <div className="screen-container" onClick={this.isModalShown} />}
                </div>

            </div>
        )
    }
}
