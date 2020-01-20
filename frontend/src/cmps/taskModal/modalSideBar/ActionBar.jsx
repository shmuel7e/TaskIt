import React, { Component } from 'react'

export default class ActionBar extends Component {
    render() {
        return (
            <div>
                <div className="action-bar flex column">
                    <h3>ACTIONS</h3>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}
