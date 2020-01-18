import React, { Component } from 'react'

export default class AddTask extends Component {
    render() {
        return (
            <div className='add-task-container'>
                <div className='add-task-title'>
                    <span className="icon-plus"> </span> Add another task
                </div>
                <div className="add-task-form">
                    <textarea rows="4" cols="50" placeholder='Enter a title for this task..'></textarea>
                    <button>Add Task</button>
                </div>
            </div>
        )
    }
}
