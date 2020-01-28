import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd'


export default class TaskPreview extends Component {
    onGetInitials = (fullName) => {
        return this.props.getInitials(fullName);
    }

    render() {
        const { task, topicId, boardId } = this.props;
        return (<Draggable draggableId={this.props.id} index={this.props.index}>
            {(provided) => {
                return <div className='drag-task'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <li className='task-container' style={{ background: task.bgColor }}>
                        <Link to={`${boardId}/${topicId}/${task.id}`}>
                            {task.cover ? <img alt="" src={task.cover}/> : ''}
                            <div className="task-title">{task.title}</div>
                            <div className='members-container flex'> {task.members.map((member, idx) => {
                                return <span style={{ background: member.bgColor }} data-toggle="tooltip" title={member.username}
                                    className="member-name-initials" key={idx}>{this.onGetInitials(member.username)} </span>
                            })}
                            </div>
                            <div className='labels-container flex'> {task.labels.map((label, idx) => {
                                return <span style={{ background: label.color }} data-toggle="tooltip" title={label.name}
                                    className="label-name-initials smaller" key={idx}> </span>
                            })}
                            </div>
                        </Link>
                    </li>
                </div>
            }

            }

        </Draggable>)
    }
}
