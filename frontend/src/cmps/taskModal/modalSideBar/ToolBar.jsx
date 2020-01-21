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
                        <button onClick={() => this.toggleMiniModal('members')}>Members
                            <span class="icon-people_alt"></span>
                        </button>
                        {this.state.isMembersShown
                            ? <div className='topic-mini-menu block'>
                                <div className="members-modal">
                                    <MembersModal closeModal={this.toggleMiniModal} board={this.props.board} addMemberToTask={this.props.addMemberToTask}
                                        getInitials={this.props.getInitials} />
                                </div>
                            </div> : ''}
                        <button onClick={() => this.toggleMiniModal('labels')}>Labels
                            <span class="icon-label"></span>
                        </button>
                        <div className="label-modal-container">
                            {this.state.isLabelsShown ? <LabelModal /> : ''}
                        </div>
                        <button>Checklist
                            <span class="icon-input-checked"></span>
                        </button>
                        <button>Due Date
                            <span class="icon-clock"></span>
                        </button>
                        <button>Add Image
                            <span class="icon-image"></span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
