import React, { Component } from 'react';
import SideMenu from './SideMenu.jsx';

export default class ShowMenu extends Component {


    state = { isMenuOn: false }

    onToggleMenu = async () => {
        this.setState({ isMenuOn: !this.state.isMenuOn });
    }

    changeBgImg = (img) => {
        this.props.changeBgImg(img);
    }

    render() {
        return (
            <div>
                <div className={`${this.state.isMenuOn ? ' menu menu-off' : 'menu menu-on'}`}><SideMenu imgs={this.props.imgs}
                    changeBgImg={this.changeBgImg} />
                    <span className="exit-menu" onClick={this.onToggleMenu}>X</span></div>
                <button className="menu-button" onClick={this.onToggleMenu}>Show Menu</button>
            </div>
        )
    }
}
