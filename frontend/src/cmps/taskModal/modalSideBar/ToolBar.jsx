import React, { Component } from 'react'
import MembersModal from './members/MembersModal';

export default class ToolBar extends Component {

    state = {
        type: '',
        isModalShown: false
    }


    toggleMiniModal = () => {
        this.setState(prevState => ({
            isModalShown: !prevState.isModalShown
        }));
    }

    closeModal = () => {
        this.setState({ isModalShown: false });
    }

    render() {
        return (
            <div >
                <div>
                    <h3>ADD TO CARD</h3>
                    <div className="tool-bar flex column justify-between">
                        <button onClick={this.toggleMiniModal}>Members</button>
                        {this.state.isModalShown
                            ? <div className='topic-mini-menu block'>
                                <div className="members-modal">
                                    <MembersModal closeModal={this.closeModal} board={this.props.board} addMemberToTask={this.props.addMemberToTask} />
                                </div>
                            </div> : ''}
                        <button>Tags</button>
                        <button>Checklist</button>
                        <button>Due Date</button>
                        <button>Add Image</button>
                    </div>
                </div>
            </div>
        )
    }
}
