import React, { Component } from 'react';
import Menu from '../sections/Menu.jsx';

export default class MenuButton extends Component {


    state = { isMenuOn: false }



    onToggleMenu = async () => {
        this.setState({ isMenuOn: !this.state.isMenuOn });
    }

    render() {
        return (
            <div>
                <div className={`${this.state.isMenuOn ? ' menu menu-off' : 'menu menu-on'}`}><Menu /></div>
                <button className="menu-button" onClick={this.onToggleMenu}>Show Menu</button>
            </div >
        )
    }
}
