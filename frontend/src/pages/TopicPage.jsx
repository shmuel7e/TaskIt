import React, { Component } from 'react';
import TopicList from '../cmps/topic/TopicList.jsx';
import ShowMenu from '../cmps/sideMenu/ShowMenu.jsx';
import ImageService from '../services/ImageService.js';
import TaskDetails from './TaskDetails.jsx';


import { connect } from 'react-redux';
import { loadBoard, setBgCover, addTask, deleteTopic } from '../actions/BoardActions';
import { Route, Router } from 'react-router';
import history from '../history';

class TopicPage extends Component {

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

    addTask = (taskTitle, topicId) => {
        this.props.addTask(taskTitle, topicId)
    }

    deleteTopic = (topicId) => {
        this.props.deleteTopic(topicId)
    }

    changeBgColor = (colorName) => {
        const style = {
            background: colorName,
        }
        this.props.setBgCover(colorName);
        this.setState({ style });
    }
    onAddNewTopic = (topicName) => {
        console.log(topicName)
    }

    render() {
        const { board } = this.props
        if (!board) return 'Loading...'
        return (
            <div style={this.state.style} className="trello-page-container header-padding">
                <TopicList
                    onAddNewTopic={this.onAddNewTopic}
                    addTask={this.addTask}
                    deleteTopic={this.deleteTopic}
                    board={board} />
                <ShowMenu imgs={this.state.imgs}
                    changeBgImg={this.changeBgImg}
                    colors={this.state.colors}
                    changeBgColor={this.changeBgColor} />
                <Router history={history}>
                    <Route component={TaskDetails} path="/topic/:topicId/:taskId" exact></Route>
                </Router>
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
    addTask,
    deleteTopic
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
