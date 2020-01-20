import React, { Component } from 'react'

export default class ModalActivity extends Component {


    render() {
        return (
            <div>
                <h3 className="members-on-task-title">Members</h3>
                <div className="members-on-task flex">
                    {this.props.task.members.map((member, idx) => {
                        return <div key={idx}>  {member.username} </div>
                    })}
                </div>
            </div>
        )
    }
}
