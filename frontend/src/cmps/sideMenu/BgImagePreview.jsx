import React, { Component } from 'react'

export default class BgImagePreview extends Component {

    changeBgImg = () => {
        this.props.changeBgImg(this.props.img);
    }
    render() {
        return (
            <img onClick={this.changeBgImg} className="board-background-select" src={require(`../../assets/images/${this.props.img}`)} alt={this.props.img}></img>
        )
    }
}
