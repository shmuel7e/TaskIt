import React, { Component } from 'react'

export default class LabelModal extends Component {

    state = {
        labels: ['#ff0984', '#fedf17', '#66d313', '#04adff', '#f16623']
    }

    render() {
        return (
            <div className='labal-modal'>
                <h3>Labels</h3>
                <div className="labels-container">
                    <h3>Labels</h3>
                    {this.state.labels.map((label, idx) => {
                        return <div key={idx} className="label" style={{ background: label }}></div>
                    })}
                </div>
            </div>
        )
    }
}
