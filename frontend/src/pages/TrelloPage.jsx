import React, { Component } from 'react';
import MenuButton from '../cmps/sections/MenuButton';
import TopicList from '../cmps/topic/TopicList.jsx';

import { connect } from 'react-redux';
import { loadBoard } from '../actions/BoardActions';

class TrelloPage extends Component {

    componentDidMount() {
        this.props.loadBoard()
    }
    

    render() {
        const {board} = this.props
        if(!board) return 'Loading...'
        console.log(board);
        return (
            <div className="trello-page-container header-padding">
                <MenuButton />
                <TopicList board={board}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    board: state.board.board
    };
  };
  const mapDispatchToProps = {
    loadBoard
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TrelloPage);
