import React, { Component } from 'react';
import TopicList from '../cmps/topic/TopicList.jsx';
import ShowMenu from '../cmps/sideMenu/ShowMenu.jsx';
import ImageService from '../services/ImageService.js';


import { connect } from 'react-redux';
import { loadBoard } from '../actions/BoardActions';

class TrelloPage extends Component {

    state = {
        imgs: [],
        style: {}
    }

    componentDidMount() {
        this.props.loadBoard()
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
        const { board } = this.props
        if (!board) return 'Loading...'
        console.log(board);
        return (
            <div style={this.state.style} className="trello-page-container header-padding">
                <ShowMenu imgs={this.state.imgs} changeBgImg={this.changeBgImg} />
                <TopicList board={board} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        board: state.board.board
    };
};
const mapDispatchToProps = {
    loadBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(TrelloPage);
