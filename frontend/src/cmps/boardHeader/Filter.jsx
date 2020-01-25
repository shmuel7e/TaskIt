import React, { Component } from 'react'

export default class Filter extends Component {
    state = { email: '' }
    onInputChange = async (ev) => {

        const field = ev.target.name;
        const value = ev.target.value;
        await this.setState({ [field]: value })
        this.props.onSearchUsers(this.state.email);
    }
    render() {
        return (
            <React.Fragment>
                <input type="text"
                    name="email"
                    onChange={this.onInputChange}
                    placeholder="Email address"
                    value={this.state.email} />
            </React.Fragment>
        )
    }
}
