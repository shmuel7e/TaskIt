import React, { Component } from 'react'


import SideMenu from '../sideMenu/SideMenu.jsx';
import BoardMemberList from './BoardMemberList.jsx';
import SearchUsers from './SearchUsers.jsx'

export default class BoardHeader extends Component {

    state = { isMenuOn: false, isSearchUserOn: false }

    onToggleMenu = () => {
        this.setState({ isMenuOn: !this.state.isMenuOn });
    }

    onToggleUsersModal = () => {
        this.setState({ isSearchUserOn: !this.state.isSearchUserOn });
    }

    changeBgColor = (color) => {
        this.props.changeBgColor(color);
    }

    changeBgImg = (img) => {
        this.props.changeBgImg(img);
    }
    closeMenue = () => {
      this.setState({isMenuOn: false})
    }

    render() {
        const { imgs, colors, board } = this.props;
        return (
            <div className='board-header flex justify-between'>
                {this.state.isMenuOn && <div className="screen-container" onClick={this.closeMenue} />}
                <div className="first-header-section flex justify-between">
                    <button className='borad-header-btn' >Boards</button>
                    <span className="board-header-divider"></span>
                    <BoardMemberList board={board} />
                    <span className="board-header-divider"></span>
                    <button onClick={this.onToggleUsersModal} className='borad-header-btn' >Invite</button>
                    <div className="search-user-modal">
                        {this.state.isSearchUserOn ? <SearchUsers
                            toggleUsersModal={this.onToggleUsersModal}
                            onAddMember={this.props.onAddMember}
                            membersToInvite={this.props.membersToInvite}
                            onSearchUsers={this.props.onSearchUsers}
                        /> : ''}
                    </div>
                </div>
                <button className='borad-header-btn' onClick={this.onToggleMenu}>Show Menu</button>
                <div className={`${this.state.isMenuOn ? ' menu menu-off' : 'menu menu-on'}`}>
                    <SideMenu
                        board={board}
                        imgs={imgs}
                        changeBgImg={this.changeBgImg}
                        changeBgColor={this.changeBgColor}
                        colors={colors} />

                    <span className="exit-menu" onClick={this.onToggleMenu}>
                        <span className="icon-cross"></span>
                    </span>
                </div>
            </div>
        )
    }
}
