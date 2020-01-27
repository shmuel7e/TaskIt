import React, { Component } from 'react';
import TaskColorModal from './changeTaskColor/TaskColorModal.jsx';

export default class ActionBar extends Component {

    state = {
        isModalShown: false
    }

    toggleMiniModal = () => {
        this.setState(prevState => ({
            isModalShown: !prevState.isModalShown
        }));
    }

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
                    <div className='task-color-container'>
                        <button onClick={this.toggleMiniModal}>Change color
                            <span className="icon-color_lens"></span>
                        </button>
                        {this.state.isModalShown ?
                        <React.Fragment>
                            <div className="screen-container" onClick={this.toggleMiniModal} />
                            <TaskColorModal closeModal={this.toggleMiniModal} changeTaskColor={this.props.changeTaskColor}/>
                        </React.Fragment>
                          : ''}
                    </div>
                    <button onClick={this.onCloneTask}>Clone
                    <span className="icon-clone"></span>
                    </button>
                    <button onClick={this.onDeleteTask}>Delete
                    <span className="icon-trash"></span>
                    </button>
                </div>
            </div>
        )
    }
}