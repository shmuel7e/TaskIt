import React, { Component } from 'react';
import BgGalleryList from './BgGalleryList.jsx';

export default class SideMenu extends Component {

    state = {
        bgGallery: '',
    }

    changeBgImg = (img) => {
        this.props.changeBgImg(img);
    }

    changeBgColor = (color) => {
        this.props.changeBgColor(color);
    }

    setGallery = (type) => {
        this.setState({ bgGallery: type });
    }

    goBack = () => {
        this.setState({ bgGallery: '' });
    }

    render() {
        return (
            <div>
                <div className="menu-header">
                    <div className="menu">
                        {this.state.bgGallery !== '' && <BgGalleryList bgGallery={this.state.bgGallery}
                            imgs={this.props.imgs} colors={this.props.colors} changeBgImg={this.changeBgImg} changeBgColor={this.changeBgColor}
                            goBack={this.goBack} />}

                        {this.state.bgGallery === '' &&
                            <section>
                                <div className="choose-options">Choose Your background</div>
                                <div className="menu-options flex">
                                    <img src={require(`../../assets/images/colors.jpg`)} alt="" onClick={this.setGallery.bind(null, 'colors')}></img>
                                    <img src={require(`../../assets/images/images.jpg`)} alt="" onClick={this.setGallery.bind(null, 'imgs')}></img>
                                </div>
                                <span className="menu-description flex justify-around">
                                    <span>Colors</span>
                                    <span> Photos</span>
                                </span>
                            </section>}

                    </div>
                </div>
            </div>
        )
    }
}
