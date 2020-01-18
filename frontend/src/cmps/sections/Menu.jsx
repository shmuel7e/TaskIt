import React, { Component } from 'react';

export default class Menu extends Component {




    onCloseMenu = () => {
        console.log('im here')
        let elMenu = document.querySelector('.menu');
        console.log(elMenu);
    }

    render() {
        console.log(this.props.isMenuOn)
        return (
            <div>
                <div className="menu-header">
                    <div className="menu">
                        <span className="exit-menu" onClick={this.onCloseMenu}>X</span>
                    </div>
                </div>
            </div>
        )
    }
}
