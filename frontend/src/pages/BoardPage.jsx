import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadBoards,setCurrBoard } from '../actions/BoardActions'
import BoardService from '../services/BoardService'

class BoardPage extends Component {
    componentDidMount() {
        this.props.loadBoards(this.props.user._id)
    }
    selectBoard=(board)=>{
        this.props.setCurrBoard(board)
        this.props.history.push('/topic')
    }

    onAddNewBoard= async()=>{
      await  BoardService.addBoard(this.props.user)
      this.props.loadBoards(this.props.user._id)
    }
    render() {
        if (!this.props.boards) return 'loading...'
        return (
            <div className="board-page-container">
                <h1>Personal Boards</h1>
                <button onClick={this.onAddNewBoard}>Add new board</button>
                <div className="flex">
                {this.props.boards.map(board => {
                    return <div 
                    className="board-container flex column"
                    onClick={this.selectBoard.bind(null,board)}
                    key={board._id}
                    >
                        <h4>{board.title}</h4>
                        <img src={require('../assets/images/'+board.cover)} alt=""/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = {
    loadBoards,
    setCurrBoard
};
const mapStateToProps = state => {
    return {
        user: state.user.loggedInUser,
        boards: state.board.boards
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);
