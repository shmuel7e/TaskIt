import React, { Component } from 'react'

export default class LabelsPreview extends Component {

    onAddLabelToTask = () => {
        this.props.addLabelToTask(this.props.label);
    }

    render() {
        return (
            <div className="label" onClick={this.onAddLabelToTask} style={{ background: this.props.label.color }}></div>
        )
    }
}
