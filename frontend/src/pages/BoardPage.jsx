import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadBoards, setCurrBoard } from '../actions/BoardActions'
import BoardService from '../services/BoardService'
import SocketService from '../services/SocketService.js'
import EventBusService from '../services/EventBusService'
import BoardTools from '../cmps/board/BoardTools.jsx'
import BoardEdit from '../cmps/board/BoardEdit.jsx'

class BoardPage extends Component {
    state = { currBoard: null }
    componentDidMount=async()=> {
        this.props.loadBoards(this.props.user._id)
        SocketService.setup();
        SocketService.emit('chat topic', this.props.match.params.id);
        SocketService.emit('user joined the board', { text: `${this.props.user.username} has joined the board` });
        SocketService.on('user changes', async (msg) => {
            await this.props.loadBoards(this.props.user._id)
        });

    }
    selectBoard = (boardId) => {
        this.props.history.push('/topic/' + boardId)
    }

    onAddNewBoard = async () => {
        await BoardService.addBoard(this.props.user)
        this.props.loadBoards(this.props.user._id)
        EventBusService.emit('toggleModal', { msg: 'success to add board', style: 'success' });
    }

    onDeleteBoard = async (boardId) => {
        await BoardService.deleteBoard(boardId)
        this.props.loadBoards(this.props.user._id)
        EventBusService.emit('toggleModal', { msg: 'Your board has been deleted', style: 'success' });
        SocketService.emit('user changes', this.props.user.username + ' has deletet board');
    }
    onEditBoard = (board) => {
        this.setState({ currBoard: board })
    }
    onSaveBoard =async (board) => {
       await BoardService.updateBoard(board)
       SocketService.emit('user changes', this.props.user.username + ' has changed board title');
       this.props.loadBoards(this.props.user._id)
        this.setState({ currBoard: null })

    }

    render() {
        return (
            <div className="board-page-container flex header-padding column">
                <div className="board-page-title">

                    <h3>
                        <span className="icon-user"></span>
                        Personal Boards
                    </h3>
                </div>
                {this.props.boards && <div className="boards-container flex">
                    {this.props.boards.map(board => {
                        const style = { background: board.cover, width: '185px', height: '95px' }
                        return <div className="board-container flex column"
                            onClick={this.selectBoard.bind(null, board._id)}
                            key={board._id}>
                            <h4>{board.title}</h4>
                            {board.cover.includes('bg') && <img src={require('../assets/images/' + board.cover)} alt="" />}
                            {!board.cover.includes('bg') && <div style={style}></div>}
                            <BoardTools
                                onEditBoard={this.onEditBoard}
                                onDeleteBoard={this.onDeleteBoard}
                                board={board}
                            />
                        </div>
                    })}
                    <button className="board-container add-board-btn" onClick={this.onAddNewBoard}>Create new board</button>
                </div>}
                {this.state.currBoard &&
                    <BoardEdit
                        board={this.state.currBoard}
                        onSaveBoard={this.onSaveBoard}
                    />
                }

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
