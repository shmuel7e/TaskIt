import React, { Component } from 'react';
import TaskList from '../task/TaskList.jsx';

export default class TopicPreview extends Component {
    render() {
        const { topic } = this.props
        return (
            <div className='topic-container'>
                <div className="topic-header">{topic.title}</div>
                <TaskList topic={topic} />
            </div>
        )
    }
}


