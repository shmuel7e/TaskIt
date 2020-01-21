import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd'

import AddTask from '../task/AddTask.jsx'
import TaskList from '../task/TaskList.jsx';

export default class TopicPreview extends Component {

    state = { isModalShown: false }

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
    }

    render() {
        const { topic } = this.props
        return (<Droppable droppableId={topic.id}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className='topic-container'>
                    <div className="topic-header flex justify-between">
                        <div className="topic-title" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}>{topic.title}</div>
                        <div onClick={this.toggleMiniModal} className="dots-icon-container">
                            <span className="icon-dots-three-horizontal"></span>
                            {this.state.isModalShown
                                ? <div className='topic-mini-menu block'>
                                    <div onClick={this.onDeleteTopic} className="delete-topic-btn">Delete</div>
                                </div> : ''}
                        </div>
                    </div>
                    <TaskList addTask={this.props.addTask} topic={topic} getInitials={this.props.getInitials} />
                    <AddTask addTask={this.props.addTask} topicId={this.props.topic.id} />
                    {provided.placeholder}
                </div>
            )}

        </Droppable>)
    }
}


