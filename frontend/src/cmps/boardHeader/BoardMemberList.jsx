import React, { Component } from 'react';
import BoardMemberPreview from './BoardMemberPreview.jsx'


export default class BoardMemberList extends Component {
    render() {
        return (
            <div className='members-container flex justify-between'>
                {this.props.board.members.map((member, i) =>
                    <BoardMemberPreview
                        onRemoveUser={this.props.onRemoveUser}
                        member={member}
                        user={this.props.user}
                        key={i}
                    />)}
            </div>
        )
    }
}
