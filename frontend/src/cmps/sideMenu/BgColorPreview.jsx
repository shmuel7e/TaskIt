import React, { Component } from 'react'

export default class BgColorPreview extends Component {

    changeBgColor = () => {
        this.props.changeBgColor(this.props.color);
    }

    render() {
        return (
            <div style={{ background: this.props.color }} onClick={this.changeBgColor} className="board-background-select"></div>
        )
    }
}



