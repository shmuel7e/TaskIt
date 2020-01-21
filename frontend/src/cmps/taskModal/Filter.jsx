import React, { Component } from 'react'

export default class Filter extends Component {

    state = {
        filterBy: {
            name: '',
        }
    }

    onInputChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), function () {
            this.onFilterClick();
        })

    }

    onFilterClick = () => {
        this.props.onSetFilter(this.state.filterBy);
    }

    render() {

        return (
            <div className="members-modal-input" >
                {(this.props.filterType === 'members') ?
                    <input type="text" placeholder="Search Members" name="name" onChange={this.onInputChange}
                        value={this.state.filterBy.name}></input>
                    :
                    <input type="text" placeholder="Search Labels" name="name" onChange={this.onInputChange}
                        value={this.state.filterBy.name}></input>
                }
            </div>
        )
    }
}
