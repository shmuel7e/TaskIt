import React, { Component } from 'react';
import TopicPreview from "../topic/TopicPreview.jsx";
import AddTopic from './AddTopic.jsx'
export default class TopicList extends Component {

    render() {
        return <ul className='topics-container flex align-start'>
            {this.props.board.topics.map((topic, i) =>
                <TopicPreview
                    boardId={this.props.board._id}
                    getInitials={this.props.getInitials}
                    changeTopicTitle={this.props.changeTopicTitle}
                    deleteTopic={this.props.deleteTopic}
                    addTask={this.props.addTask}
                    key={topic.id}
                    topic={topic}
                    index={i}
                ></TopicPreview>)}
            <AddTopic onAddNewTopic={this.props.onAddNewTopic} />
        </ul>
    }

}