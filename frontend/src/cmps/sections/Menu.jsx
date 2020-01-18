import React, { Component } from 'react';

export default class Menu extends Component {





    render() {
        console.log(this.props.isMenuOn)
        return (
            <div className={`${this.props.isMenuOn ? 'menu-on' : 'menu-off'}`}>
                HELLO
            </div>
        )
    }
}
