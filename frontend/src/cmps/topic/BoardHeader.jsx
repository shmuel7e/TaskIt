import React, { Component } from 'react'
import SideMenu from '../sideMenu/SideMenu.jsx';


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
        const {imgs, colors} = this.props;
        return (
            <div className='board-header'>
                <button className='menu-button' onClick={this.onToggleMenu}>Show Menu</button>
                <div className={`${this.state.isMenuOn ? ' menu menu-off' : 'menu menu-on'}`}>
                    <SideMenu imgs={imgs}
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
