import React, { Component } from 'react'
import ModalComments from './ModalComments';
import ModalActivity from './ModalActivity';

export default class ModalMain extends Component {

    state = { isModalShown: false }

    toggleModalComments = () => {
        this.setState(prevState => ({
            isModalShown: !prevState.isModalShown
        }));
    }

    onTxtChange = (editedTxt) => {
        //console.log(editedTxt)
    }

    render() {
        const { task, changeTodo, getInitials } = this.props;
        return (
            <div className='modal-main-container'>
                <div className="modal-activity flex">
                    <ModalActivity task={task} getInitials={getInitials} changeTodo={changeTodo} />

                </div>
                <div className="sub-title">Description
                <span className="icon-paragraph-left"></span>
                </div>
                <div className="modal-txt description" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}>
                    {task.description === '' ? 'Add description...' : task.description}
                </div>
                <div className="sub-title">Activity
                <span className="icon-message"></span>
                </div>
                <div className="comment-box">
                    <div className='add-comment-title' onClick={this.toggleModalComments}>Write a comment...</div>
                    {this.state.isModalShown ? <ModalComments /> : ''}
                </div>
            </div>
        )
    }
}
