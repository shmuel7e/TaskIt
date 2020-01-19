import React, { Component } from 'react'

export default class ModalHeader extends Component {

    onTxtChange = (editedTxt) => {
        console.log(editedTxt)
    }

    onCloseModal = () => {
        this.props.closeModal();
    }

    render() {
        const { task } = this.props;
        const { topic } = this.props
        return (
            <div className="modal-header">
                <span className='icon-cross' onClick={this.onCloseModal}></span>
                <span className="icon-window"></span>
                <div className="modal-txt title" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}>{task.title}</div>
                <small>In list <span className="bottom-line">{topic.title}</span></small>
            </div>
        )
    }
}
