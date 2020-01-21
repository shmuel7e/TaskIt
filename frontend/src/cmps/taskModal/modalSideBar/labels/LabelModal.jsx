import React, { Component } from 'react'
import LabelsList from './LabelsList'

export default class LabelModal extends Component {

    state = {
        labels: [{ color: '#ff0984', name: 'pink' },
        { color: '#fedf17', name: 'yellow' },
        { color: '#66d313', name: 'green' },
        { color: '#04adff', name: 'blue' },
        { color: '#f16623', name: 'orange' }]
    }
    onCloseModal = () => {
        this.props.closeModal('labels');
    }

    render() {
        return (
            <div className='labal-modal'>
                <span onClick={this.onCloseModal} className="close-member-modal">x</span>
                <h3>Labels</h3>
                <LabelsList labels={this.state.labels} addLabelToTask={this.props.addLabelToTask} />
            </div>
        )
    }
}
