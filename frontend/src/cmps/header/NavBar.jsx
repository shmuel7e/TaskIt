import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className='flex'>
                <div className='link-container'><NavLink activeClassName="active" to='/Trello'>My Trello</NavLink></div>
                <div className='link-container'><NavLink activeClassName="active" to='/Auth'>Sign in</NavLink></div>
            </nav>
        )
    }
}
