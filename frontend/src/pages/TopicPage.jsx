import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from "styled-components";

import BoardHeader from '../cmps/boardHeader/BoardHeader.jsx';
import TopicList from '../cmps/topic/TopicList.jsx';
import ImageService from '../services/ImageService.js';
import TaskDetails from './TaskDetails.jsx';
import UtilsService from '../services/UtilsService.js';


import { connect } from 'react-redux';
import { loadBoard, setBgCover, addTask, deleteTopic, addTopic, updateTopic, sortTasks } from '../actions/BoardActions';
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

    changeTopicTitle = (topic, newTxt) => {
        topic.title = newTxt;
        this.props.updateTopic(topic);
    }

    onAddNewTopic = (topicName) => {
        this.props.addTopic(topicName)
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
                        changeBgColor={this.changeBgColor}/>

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
        board: state.board.board
    };
};
const mapDispatchToProps = {
    loadBoard,
    setBgCover,
    addTask,
    deleteTopic,
    addTopic,
    updateTopic,
    sortTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
