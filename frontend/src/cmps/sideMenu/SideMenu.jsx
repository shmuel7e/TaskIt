import React, { Component } from 'react';
import BgGalleryList from './BgGalleryList';


export default class SideMenu extends Component {

    changeBgImg = (img) => {
        this.props.changeBgImg(img);
    }

    render() {
        return (
            <div>
                <div className="menu-header">
                    <div className="menu">
                        <BgGalleryList imgs={this.props.imgs} changeBgImg={this.changeBgImg} />
                    </div>
                </div>
            </div>
        )
    }
}
