import React, { Component } from 'react';
import BgImagePreview from './BgImagePreview.jsx';
import BgColorPreview from './BgColorPreview.jsx';

export default class BgGalleryList extends Component {

    changeBgImg = (img) => {
        this.props.changeBgImg(img);
    }

    changeBgColor = (color) => {
        this.props.changeBgColor(color);
    }

    DynamicCmp = () => {
        switch (this.props.bgGallery) {
            case 'colors':
                return <div className="bg-gallery"> {this.props.colors.map((color, idx) => {
                    return <BgColorPreview color={color} key={idx} changeBgColor={this.changeBgColor} />
                })}
                </div>
            case 'imgs':
                return <div className="bg-gallery"> {this.props.imgs.map((img, idx) => {
                    return <BgImagePreview img={img} key={idx} changeBgImg={this.changeBgImg} />
                })}
                </div>

            default:
                return
        }
    }

    render() {
            if (!this.props.imgs) return 'loading..'
        return this.DynamicCmp();
    }
}






