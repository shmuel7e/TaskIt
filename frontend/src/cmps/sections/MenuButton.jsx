import React, { Component } from 'react';
import Menu from '../sections/Menu.jsx';

export default class MenuButton extends Component {

    state = {
        isMenuOn: false,
    }



    onToggleMenu = () => {
        this.setState(prevState => { prevState.isMenuOn = !prevState.isMenuOn }, () => this.render());
    }

    render() {
        return (
            <div>
                <Menu isMenuOn={this.isMenuOn}></Menu>
                <button className="menu-button" onClick={this.onToggleMenu}>Show Menu</button>
            </div>
        )
    }
}
