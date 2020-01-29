import React, { Component } from 'react';
import DatePick from './DatePick.jsx';

export default class DueTimeModal extends Component {

    onCloseModal = () => {
        this.props.closeModal('dues');
    }

    render() {
        return (
            <div className="due-time-modal">
                <span onClick={this.onCloseModal} className="icon-cross"></span>
                <h3>Change Due Date</h3>
                <DatePick style={{ border: 'none' }} addDueTimeToTask={this.props.addDueTimeToTask} />
            </div>
        )
    }
}
