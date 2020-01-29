import React, { Component } from 'react'

export default class BoardEdit extends Component {
    state={board:this.props.board}
    onCloseModal=()=>{
        this.props.onSaveBoard(this.state.board)
    }
    stayInModal = (ev) => {
        ev.stopPropagation();
    }
    inputChange=(ev)=>{
       const value=ev.target.value
        const board=this.state.board
        board.title=value
        this.setState({board})
    }
    render() {
        const style = { background: this.state.board.cover, width: '300px', height: '280px' }
        return (
            <div className="widow-screen flex justify-center align-center" onClick={this.onCloseModal}>
                <div onClick={this.stayInModal} className="board-edit-container">
                    <input onChange={this.inputChange} type="text" value={this.state.board.title}/>
                {this.state.board.cover.includes('bg') && <img src={require('../../assets/images/' + this.state.board.cover)} width="300px" height="280px" alt="" />}
                {!this.state.board.cover.includes('bg') && <div style={style}></div>}
                </div>
            </div>
        )
    }
}
