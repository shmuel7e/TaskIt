import React, { Component } from 'react'
import Filter from './Filter.jsx'
import UserList from './UserList.jsx'


export default class SearchUsers extends Component {
    render() {
        return (
            <div className="flex column justify-center">
                <Filter onSearchUsers={this.props.onSearchUsers}/>
                <UserList/>
            </div>
        )
    }
}
