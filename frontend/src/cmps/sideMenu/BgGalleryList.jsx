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

    onGoBack = () => {
        this.props.goBack();
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
        return <div> <span className="goback-menu" onClick={this.onGoBack}>
            <span className="icon-arrow-left2"></span>
        </span> {this.DynamicCmp()}
        </div>

    }
}






