import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd'

export default class TaskPreview extends Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {provided => (
                    <div 
                    ref={provided.innerRef} 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        <li className='task-container'>
                            <Link to={`topic/${this.props.topicId}/${this.props.task.id}`}>
                                <div className="task-title">{this.props.task.title}
                                </div>
                            </Link>
                        </li>

                    </div>
                )}

            </Draggable>
        )
    }
}
