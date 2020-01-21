import React, { Component } from 'react';
import Filter from '../../Filter.jsx';
import LabelsPreview from './LabelsPreview';


export default class LabelsList extends Component {

    state = {
        labels: [],
        filterBy: null
    }

    componentDidMount() {
        let filteredLabels = this.LoadLabels();
        this.setState({ labels: filteredLabels });

    }

    LoadLabels = () => {
        if (!this.state.filterBy) return this.props.labels;
        const filteredLabels = this.props.labels.filter(label => label.name.toLowerCase().includes(this.state.filterBy.name.toLowerCase()));
        this.setState({ labels: filteredLabels });

    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.LoadLabels());
    }


    render() {
        return (
            <div className="labels-container">
                <Filter onSetFilter={this.onSetFilter} filterType={'labels'} />
                <h3 className="labels-title">Labels</h3>
                {this.state.labels.map((label, idx) => {
                    return <LabelsPreview label={label} key={idx} className="label" style={{ background: label.color }} />
                })}
            </div>
        )
    }
}
