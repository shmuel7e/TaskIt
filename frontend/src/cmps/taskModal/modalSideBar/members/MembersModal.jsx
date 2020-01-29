import React, { Component } from 'react'
import MembersList from './MembersList';

export default class MembersModal extends Component {

    onCloseModal = () => {
        this.props.closeModal('members');
    }

    render() {
        return (
            <div className="members-modal-input">
                <span onClick={this.onCloseModal} className="icon-cross"></span>
                <h3 className="members-title">Members</h3>
                <MembersList members={this.props.board.members} addMemberToTask={this.props.addMemberToTask}
                    getInitials={this.props.getInitials} />
            </div>
        )
    }
}

