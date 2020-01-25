import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadBoards, setCurrBoard } from '../actions/BoardActions'
import BoardService from '../services/BoardService'

class BoardPage extends Component {
    componentDidMount() {
        this.props.loadBoards(this.props.user._id)
       
    }
    selectBoard = (boardId) => {
    //  await this.props.setCurrBoard(null)
        this.props.history.push('/topic/'+boardId)
    }

    onAddNewBoard = async () => {
        await BoardService.addBoard(this.props.user)
        this.props.loadBoards(this.props.user._id)
    }
    render() {
        return (
            <div className="board-page-container">
                <h1>Personal Boards</h1>
                <button onClick={this.onAddNewBoard}>Add new board</button>
                {this.props.boards && <div className="flex">
                    {this.props.boards.map(board => {
                        const style={background:board.cover,width:'250px',height:'160px'}
                        return <div
                            className="board-container flex column"
                            onClick={this.selectBoard.bind(null, board._id)}
                            key={board._id}
                        >
                            <h4>{board.title}</h4>
                            {board.cover.includes('bg')  && 
                            <img src={require('../assets/images/' + board.cover)} alt="" />
                            }
                            {!board.cover.includes('bg')  && <div style={style}></div>}
                        </div>
                    })}
                </div>}

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
