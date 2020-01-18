import React, { Component } from 'react';
import ShowMenu from '../cmps/sideMenu/ShowMenu.jsx';
import ImageService from '../services/ImageService.js';


export default class TrelloPage extends Component {

    state = {
        imgs: [],
        style: {}
    }

    componentDidMount() {
        this.getGalleryImgs();
    }

    getGalleryImgs = async () => {
        const imgs = await ImageService.getGalleryImages();
        await this.setState({ imgs });
    }

    changeBgImg = (imgName) => {
        const style = {
            backgroundImage: `url(${require(`../assets/images/${imgName}`)})`,
            position: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
        console.log(style.background)
        this.setState({ style })
    }

    render() {
        if (!this.state.imgs) return 'loading....';
        return (
            <div style={this.state.style} className="trello-page-container">
                <ShowMenu imgs={this.state.imgs} changeBgImg={this.changeBgImg} />
            </div>
        )
    }
}
