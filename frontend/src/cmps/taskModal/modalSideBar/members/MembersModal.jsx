import React, { Component } from 'react'
import MembersList from './MembersList';

export default class MembersModal extends Component {

    onCloseModal = () => {
        this.props.closeModal();
    }

    render() {
        return (
            <div className="members-modal-input">
                <span onClick={this.onCloseModal} className="close-member-modal">x</span>
                <h3 className="members-title">Members</h3>
                <input type="text" placeholder="Search Members"></input>
                <MembersList members={this.props.board.members} />
            </div>
        )
    }
}


// this.props.task.members