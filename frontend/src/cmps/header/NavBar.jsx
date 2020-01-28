import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    state = { showUserNavBar: false }
    get shortcutUserName() {
        return this.props.user.username.charAt(0).toUpperCase()
    }
    toggleUserNavBar = () => {
        let showUserNavBar = !this.state.showUserNavBar
        this.setState({ showUserNavBar })
    }
    onLogout = () => {
        this.props.onLogout()
        this.setState({ showUserNavBar: false })
    }
    closeMenue = () => {
        this.setState({ showUserNavBar: false })
    }
    render() {
        return (
            <nav className='nav-bar-container flex'>
                {this.state.showUserNavBar && <div className="screen-container" onClick={this.closeMenue} />}
                {this.props.user &&
                    <div className='link-container'>
                        <NavLink activeClassName="active" to='/board'>
                            My Boards
                    </NavLink>
                    </div>
                }
                {/* <div className='link-container'>
                    <NavLink activeClassName="active" to='/topic'>
                        My Taskit
                        </NavLink>
                </div> */}
                <div className='link-container'>
                    <NavLink activeClassName="active" to='/About'>
                        About
                    </NavLink>
                </div>
                {!this.props.user &&
                    <div className='link-container'>
                        <NavLink activeClassName="active" to='/Auth'>
                            Sign in
                    </NavLink>
                    </div>
                }
                {this.props.user &&
                    <div className='link-container flex align-center justify-center'>
                        <div onClick={this.toggleUserNavBar} className="userIcon-container flex align-center justify-center">
                            {this.shortcutUserName}
                        </div>
                        {this.state.showUserNavBar &&
                            <ul className="user-navBar flex column align-center"
                                onBlur={this.toggleUserNavBar}>
                                <li>Profile</li>
                                <li onClick={this.onLogout}>Logout</li>
                            </ul>
                        }

                    </div>
                }



            </nav>
        )
    }
}
