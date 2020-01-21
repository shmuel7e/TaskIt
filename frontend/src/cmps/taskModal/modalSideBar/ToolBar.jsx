import React, { Component } from 'react'
import MembersModal from './members/MembersModal';
import LabelModal from './labels/LabelModal';

export default class ToolBar extends Component {

    state = {
        isMembersShown: false,
        isLabelsShown: false
    }


    toggleMiniModal = (type) => {
        switch (type) {

            case 'members':
                this.setState(prevState => ({
                    isMembersShown: !prevState.isMembersShown
                }));
                break;

            case 'labels':
                this.setState(prevState => ({
                    isLabelsShown: !prevState.isLabelsShown
                }));
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <div >
                <div>
                    <h3>ADD TO CARD</h3>
                    <div className="tool-bar flex column justify-between">
                        <button onClick={() => this.toggleMiniModal('members')}>Members</button>
                        {this.state.isMembersShown
                            ? <div className='topic-mini-menu block'>
                                <div className="members-modal">
                                    <MembersModal closeModal={this.toggleMiniModal} board={this.props.board} addMemberToTask={this.props.addMemberToTask}
                                        getInitials={this.props.getInitials} />
                                </div>
                            </div> : ''}
                        <button onClick={() => this.toggleMiniModal('labels')}>Labels</button>
                        <div className="label-modal-container">
                            {this.state.isLabelsShown ? <LabelModal closeModal={this.toggleMiniModal} /> : ''}
                        </div>
                        <button>Checklist</button>
                        <button>Due Date</button>
                        <button>Add Image</button>
                    </div>
                </div>
            </div>
        )
    }
}
