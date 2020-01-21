import React, { Component } from 'react'

export default class LabelsPreview extends Component {
    render() {
        return (
            <div className="label" style={{ background: this.props.label.color }}></div>
        )
    }
}
