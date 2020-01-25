import React, { Component } from 'react'


import SideMenu from '../sideMenu/SideMenu.jsx';
import BoardMemberList from './BoardMemberList.jsx';
import SearchUsers from './SearchUsers.jsx'

export default class BoardHeader extends Component {

    state = { isMenuOn: false }

    onToggleMenu = async () => {
        this.setState({ isMenuOn: !this.state.isMenuOn });
    }

    changeBgColor = (color) => {
        this.props.changeBgColor(color);
    }

    changeBgImg = (img) => {
        this.props.changeBgImg(img);
    }

    render() {
        const { imgs, colors, board } = this.props;
        return (
            <div className='board-header flex justify-between'>
                <div className="first-header-section flex justify-between">
                    <button className='borad-header-btn' >Boards</button>
                    <span className="board-header-divider"></span>
                    <BoardMemberList board={board} />
                    <span className="board-header-divider"></span>
                    <button className='borad-header-btn' >Invite</button>
                    <SearchUsers 
                    onAddMember={this.props.onAddMember}
                    membersToInvite={this.props.membersToInvite}
                    onSearchUsers={this.props.onSearchUsers}
                    />
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
