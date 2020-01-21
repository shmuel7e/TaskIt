import React, { Component } from 'react'

export default class ActionBar extends Component {

    onDeleteTask = () => {
        this.props.deleteTask();
    }

    onCloneTask = () => {
        this.props.cloneTask();
    }

    render() {
        return (
            <div>
                <div className="action-bar flex column">
                    <h3>ACTIONS</h3>
                    <button onClick={this.onCloneTask}>Clone
                    <span class="icon-clone"></span>
                    </button>
                    <button onClick={this.onDeleteTask}>Delete
                    <span class="icon-trash"></span>
                    </button>
                </div>
            </div>
        )
    }
}
