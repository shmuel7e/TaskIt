import React, { Component } from 'react'
import ModalActivity from './ModalActivity';

export default class ModalMain extends Component {

    onTxtChange = (editedTxt) => {
        //console.log(editedTxt)
    }

    render() {
        const { task } = this.props;
        return (
            <div className='modal-main-container'>
                <div className="modal-activity">  <ModalActivity task={task} /> </div>
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
                    <textarea placeholder="Write a comment..."></textarea>
                </div>
            </div>
        )
    }
}
