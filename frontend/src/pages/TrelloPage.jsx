import React, { Component } from 'react';
import TopicList from '../cmps/topic/TopicList.jsx';
import ShowMenu from '../cmps/sideMenu/ShowMenu.jsx';
import ImageService from '../services/ImageService.js';

import { connect } from 'react-redux';
import { loadBoard, setBgCover, addTask } from '../actions/BoardActions';

class TrelloPage extends Component {

    state = {
        imgs: [],
        colors: [],
        style: {}
    }

    componentDidMount() {
        this.props.loadBoard()
        this.getGalleryImgs();
        this.getGalleryColors();
    }

    componentDidUpdate() {
        if (this.props.board && Object.entries(this.state.style).length === 0) {
            this.changeBgImg(this.props.board.cover)
        }
    }

    getGalleryColors = async () => {
        const colors = await ImageService.getGalleryColors();
        await this.setState({ colors });
        console.log(this.state.colors);

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
        this.props.setBgCover(imgName);
        this.setState({ style })
    }

    addTask = (taskTitle,topicId) => {
        this.props.addTask(taskTitle,topicId)
    }

    render() {
        const { board } = this.props
        console.log(board);
        
        if (!board) return 'Loading...'
        return (
            <div style={this.state.style} className="trello-page-container header-padding">
                <ShowMenu imgs={this.state.imgs} changeBgImg={this.changeBgImg} />
                <TopicList addTask={this.addTask} board={board} />
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
    loadBoard,
    setBgCover,
    addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TrelloPage);
// backgroundImage: `url(${require(`../assets/images/${this.props.board.cover}`)})`,
// position: 'fixed',
// backgroundSize: 'cover',
// backgroundRepeat: 'no-repeat'