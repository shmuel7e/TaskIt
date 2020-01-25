import React, { Component } from 'react'

export default class CheckListModal extends Component {

    state = { checkListTitle: 'Check list' }

    onCloseModal = () => {
        this.props.closeModal('checklist')
    }

    onTxtChange = (txt) => {
        this.setState({checkListTitle:txt})
    }

    onAddCheckList = () => {
        this.props.addChecklist(this.state.checkListTitle);
        this.onCloseModal();
    }

    render() {
        return (
            <div className="check-list-container">
                <span onClick={this.onCloseModal} className="icon-cross close-member-modal"></span>
                <h3>Check list</h3>
                <h3 className="checklist-sub-title">Title</h3>
                <div className="checklist-txt" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent)}>Check list</div>
                <button className='main-btn' onClick={this.onAddCheckList}>Add</button>
            </div>
        )
    }
}
