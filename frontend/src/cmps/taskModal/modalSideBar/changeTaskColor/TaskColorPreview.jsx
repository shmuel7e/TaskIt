import React, { Component } from 'react'

export default class TaskColorPreview extends Component {

    onChangeTaskColor = () => {
        this.props.changeTaskColor(this.props.color)
    }

    render() {
        return (
            <div
                style={{ background: this.props.color }}
                onClick={this.onChangeTaskColor}
                className="task-color-preview">
            </div>
        )
    }
}
