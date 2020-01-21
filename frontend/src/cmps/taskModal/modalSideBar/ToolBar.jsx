import React, { Component } from 'react'
import MembersModal from './members/MembersModal';
import LabelModal from './labels/LabelModal';
import DueTimeModal from './dueTime/DueTimeModal.jsx';


export default class ToolBar extends Component {

    state = {
        isMembersShown: false,
        isLabelsShown: false,
        isDuesShown: false,
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

            case 'dues':
                this.setState(prevState => ({
                    isDuesShown: !prevState.isDuesShown
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
                            <span className="icon-people_alt"></span>
                        </button>
                        {this.state.isMembersShown
                            ? <div className='topic-mini-menu block'>
                                <div className="members-modal">
                                    <MembersModal closeModal={this.toggleMiniModal} board={this.props.board} addMemberToTask={this.props.addMemberToTask}
                                        getInitials={this.props.getInitials} />
                                </div>
                            </div> : ''}
                        <button onClick={() => this.toggleMiniModal('labels')}>Labels
                            <span className="icon-label"></span>
                        </button>
                        <div className="label-modal-container">
                            {this.state.isLabelsShown ? <LabelModal closeModal={this.toggleMiniModal} addLabelToTask={this.props.addLabelToTask} /> : ''}
                        </div>
                        <button>Checklist
                            <span className="icon-input-checked"></span>
                        </button>
                        <button onClick={() => this.toggleMiniModal('dues')}>Due Date
                            <span className="icon-clock"></span>
                        </button>
                        <div className="due-modal-container">
                            {this.state.isDuesShown ? <DueTimeModal closeModal={this.toggleMiniModal} addDueTimeToTask={this.props.addDueTimeToTask} /> : ''}
                        </div>
                        <button>Add Image
                            <span className="icon-image"></span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
