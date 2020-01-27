import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from "styled-components"

import AddTask from '../task/AddTask.jsx'
import TaskList from '../task/TaskList.jsx';

const ListContainer = styled.div`

`;

export default class TopicPreview extends Component {

    state = { isModalShown: false, isEditable: false }

    toggleMiniModal = () => {
        this.setState(prevState => ({
            isModalShown: !prevState.isModalShown
        }));
    }

    onDeleteTopic = () => {
        this.props.deleteTopic(this.props.topic.id)
    }

    onTxtChange = (newTxt) => {
        this.props.changeTopicTitle(this.props.topic, newTxt)
        this.onKeyPressed();
    }

    onKeyPressed = () => {
        this.setState(prevState => ({
            isEditable: !prevState.isEditable
        }));
    }

    render() {
        const { topic } = this.props
        return (<Draggable draggableId={topic.id} index={this.props.index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    className='topic-container'>
                    <Droppable droppableId={topic.id}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef} {...provided.draggableProps}>
                                {this.state.isModalShown && <div className="screen-container" onClick={this.toggleMiniModal} />}
                                <div className="topic-header flex justify-between">
                                    <div className="topic-title" suppressContentEditableWarning={true} contentEditable={this.state.isEditable} tabIndex="0" onMouseUp={this.onKeyPressed} onBlur={(e) => this.onTxtChange(e.target.textContent)}>{topic.title}</div>
                                    <div onClick={this.toggleMiniModal} className="dots-icon-container">
                                        <span className="icon-dots-three-horizontal"></span>
                                        {this.state.isModalShown
                                            ? <div className='topic-mini-menu block'>
                                                <div onClick={this.onDeleteTopic} className="delete-topic-btn">Delete</div>
                                            </div> : ''}
                                    </div>
                                </div>
                                <TaskList
                                    boardId={this.props.boardId}
                                    addTask={this.props.addTask}
                                    topic={topic}
                                    getInitials={this.props.getInitials}
                                />
                                <AddTask addTask={this.props.addTask} topicId={this.props.topic.id} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>)
    }
}


