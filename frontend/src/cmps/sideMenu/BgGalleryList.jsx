import React, { Component } from 'react';
import BgImagePreview from './BgImagePreview';

export default class BgGalleryList extends Component {

    changeBgImg = (img) => {
        this.props.changeBgImg(img);
    }

    render() {
        if (!this.props.imgs) return 'loading..'
        return (
            <div className="bg-gallery">
                {this.props.imgs.map((img, idx) => {
                    return <BgImagePreview img={img} key={idx} changeBgImg={this.changeBgImg} />
                })}
            </div>
        )
    }
}


