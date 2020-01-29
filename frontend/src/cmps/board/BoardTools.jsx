import React, { Component } from 'react'

export default class BoardTools extends Component {
    onDeleteBoard=(ev)=>{
        ev.stopPropagation()
        this.props.onDeleteBoard(this.props.board._id)
    }
    onEditBoard=(ev)=>{
        ev.stopPropagation()
        this.props.onEditBoard(this.props.board)
    }

    render() {
        return (
            <div className="board-tools-container">
               <span onClick={this.onEditBoard} className="icon-pencil2"></span>
               <span onClick={this.onDeleteBoard} className="icon-trash"></span>
            </div>
        )
    }
}
