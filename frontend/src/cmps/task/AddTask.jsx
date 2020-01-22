import React, { Component } from 'react'

export default class AddTask extends Component {

    state = { isFormOpen: false, txt: '' }

    onToggleForm = () => {
        this.setState(prevState => ({
            isFormOpen: !prevState.isFormOpen
        }));
    }

    inputChange = (ev) => {
        let value = (ev.target.type === "number") ? +ev.target.value : ev.target.value;
        this.setState({ txt: value });
    }

    onAddTask = () => {
        if (!this.state.txt) return;
        this.props.addTask(this.state.txt, this.props.topicId);
        this.onToggleForm();
    }

    onkeyup = (ev) => {
        if (ev.keyCode === 13) this.onAddTask();
    }

    render() {
        return (
            <div className='add-task-container'>
                {this.state.isFormOpen
                    ? <div className="add-task-form-container">
                        <div className="add-task-form">
                            <textarea onKeyUp={this.onkeyup} rows="4" cols="50" placeholder='Enter a title for this task..'
                                onChange={this.inputChange}></textarea>
                            <button onClick={this.onAddTask}>Add Task</button>
                            <span onClick={this.onToggleForm} className="icon-cross"></span>
                        </div>
                    </div>
                    : <div onClick={this.onToggleForm} className='add-task-title'>
                        <span className="icon-plus"> </span> Add another task
                  </div>}
            </div>
        )
    }
}
