import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import TopicPreview from "../topic/TopicPreview.jsx";
import AddTopic from './AddTopic.jsx'
export default class TopicList extends Component {
    onDragEnd=(result)=>{
        const {destination,source,draggableId}=result
        if(!destination){
            return
        }
        this.props.sortTasks(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        )
    }
    render() {
        console.log(this.props.board.topics)
        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <ul className='topics-container flex align-start'>
                {this.props.board.topics.map((topic, i) =>
                    <TopicPreview
                        changeTopicTitle={this.props.changeTopicTitle}
                        deleteTopic={this.props.deleteTopic}
                        addTask={this.props.addTask}
                        key={i} topic={topic}
                    ></TopicPreview>)}
            </ul>
                <AddTopic onAddNewTopic={this.props.onAddNewTopic} />
            </DragDropContext>)
    }

}