import React, { Component } from 'react'
import Filter from './Filter.jsx'
import UserList from './UserList.jsx'


export default class SearchUsers extends Component {

    onCloseModal = () => {
        this.props.toggleUsersModal();
    }

    render() {
        return (
            <div className="search-users-modal">
                <span onClick={this.onCloseModal} className="icon-cross"></span>
                <h3>Invite To Board</h3>
                <div className="search-users-content">
                    <Filter onSearchUsers={this.props.onSearchUsers} />
                    <UserList
                        onAddMember={this.props.onAddMember}
                        membersToInvite={this.props.membersToInvite}
                        toggleUsersModal={this.props.toggleUsersModal}
                    />
                </div>
            </div>
        )
    }
}
