import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from "styled-components";

import BoardHeader from '../cmps/boardHeader/BoardHeader.jsx';
import TopicList from '../cmps/topic/TopicList.jsx';
import ImageService from '../services/ImageService.js';
import TaskDetails from './TaskDetails.jsx';
import UtilsService from '../services/UtilsService.js';
import SocketService from '../services/SocketService.js'
import BoardService from '../services/BoardService.js'


import { connect } from 'react-redux';
import { loadBoard, setBgCover, addTask, deleteTopic, addTopic, updateTopic, sortTasks, updateBoard } from '../actions/BoardActions';
import { Route, Router } from 'react-router';
import history from '../history';

const ListContainer = styled.div`
display:flex;
flex-direction:row;
`;

class TopicPage extends Component {

    state = {
        imgs: [],
        colors: [],
        style: {}
    }

    componentDidMount() {
        this.props.loadBoard();
        this.getGalleryImgs();
        this.getGalleryColors();
        if (!this.props.user) return;
        SocketService.setup();
        // SocketService.emit('chat topic', this.props.match.params);
        SocketService.emit('user joined the board', { text: `${this.props.user.username} has joined the board` });
        SocketService.on('when added task', () => {
            this.onAddActivity('task was added');
            console.log('task was added');
            // this.props.loadBoard();
        });
        SocketService.on('when deleted topic', () => {
            console.log('deleting topic');
            // this.props.loadBoard();
        })
        SocketService.on('when title changed', () => {
            console.log('title was changed');
            // this.props.loadBoard();
        })
        SocketService.on('when topic added', () => {
            console.log('topic was added');
            // this.props.loadBoard();
        })
        SocketService.on('when cover changed', () => {
            console.log('cover was changed');
            // this.props.loadBoard();
        })
        SocketService.on('when bgColor changed', () => {
            console.log('bg color was changed');
        })
    }

    componentWillUnmount = () => {
        SocketService.terminate();
        // SocketService.off('user joined the board');
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

    changeBgImg = async(imgName) => {
        const style = {
            backgroundImage: `url(${require(`../assets/images/${imgName}`)})`,
            position: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
        this.props.setBgCover(imgName);
        this.setState({ style });

        if (!this.props.user) return;
        SocketService.emit('user changed cover', this.props.user.username + ' has changed board cover');
    }

    changeBgColor = async(colorName) => {
        const style = {
            background: colorName,
        }
     await   this.props.setBgCover(colorName);
        this.setState({ style });
        if (!this.props.user) return;
        SocketService.emit('user changed bgColor', this.props.user.username + ' has changed board color');
    }

    addTask = (taskTitle, topicId) => {
        this.props.addTask(taskTitle, topicId);
        if (!this.props.user) return;
        SocketService.emit('user added task', this.props.user.username + ' has added a new task');

    }

    deleteTopic = (topicId) => {
        this.props.deleteTopic(topicId);
        if (!this.props.user) return;
        SocketService.emit('user deleted topic', this.props.user.username + ' has deleted a topic');
    }

    onAddActivity = (activityName) => {
        let date = new Date;
        date = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        let addedActivity = { activityName: activityName, createdAt: date };
        this.props.board.activities.push(addedActivity);
        this.props.updateBoard(this.props.board);
    }

    changeTopicTitle = (topic, newTxt) => {
        topic.title = newTxt;
        this.props.updateTopic(topic);
        if (!this.props.user) return;
        SocketService.emit('user changed topic title', this.props.user.username + ' has changed topic title');

    }

    onAddNewTopic = (topicName) => {
        this.props.addTopic(topicName);
        if (!this.props.user) return;
        SocketService.emit('user added new topic', this.props.user.username + ' has added new topic');
    }

    onGetInitials = (fullName) => {
        return UtilsService.getInitials(fullName);
    }
    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result
        if (!destination) {
            return
        }
        this.props.sortTasks(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId,
            type)
    }

    render() {
        const { board } = this.props
        if (!board) return 'Loading...'
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div style={this.state.style} className="trello-page-container header-padding">
                    <BoardHeader
                        imgs={this.state.imgs}
                        board={board}
                        changeBgImg={this.changeBgImg}
                        colors={this.state.colors}
                        changeBgColor={this.changeBgColor} />

                    <Droppable droppableId="all-lists" direction="horizontal" type="list">
                        {provided => (
                            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                                <TopicList
                                    getInitials={this.onGetInitials}
                                    onAddNewTopic={this.onAddNewTopic}
                                    changeTopicTitle={this.changeTopicTitle}
                                    addTask={this.addTask}
                                    deleteTopic={this.deleteTopic}
                                    board={board} />
                            </ListContainer>
                        )}
                    </Droppable>
                    <Router history={history}>
                        <Route component={TaskDetails} path="/topic/:topicId/:taskId" exact></Route>
                    </Router>
                </div>
            </DragDropContext>
        )
    }
}

const mapStateToProps = state => {
    return {
        board: state.board.board,
        user: state.user.loggedInUser
    };
};
const mapDispatchToProps = {
    loadBoard,
    setBgCover,
    addTask,
    deleteTopic,
    addTopic,
    updateTopic,
    sortTasks,
    updateBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
