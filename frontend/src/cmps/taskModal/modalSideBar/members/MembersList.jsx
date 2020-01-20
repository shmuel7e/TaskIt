import React, { Component } from 'react'
import MembersPreview from './MembersPreview'
import MembersFilter from './MembersFilter';


export default class MembersList extends Component {

    state = {
        members: [],
        filterBy: null
    }

    componentDidMount() {
        let filteredMembers = this.loadMembers();
        this.setState({ members: filteredMembers });

    }

    loadMembers = () => {
        if (!this.state.filterBy) return this.props.members;
        const filteredMembers = this.props.members.filter(member => member.username.toLowerCase().includes(this.state.filterBy.name.toLowerCase()));
        this.setState({ members: filteredMembers });

    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadMembers());
    }

    render() {
        if (!this.props.members) return 'loading...';
        return (
            <div className="members-list-modal">
                <MembersFilter onSetFilter={this.onSetFilter} />
                <h3>Board Members</h3>
                {this.state.members.map((member, idx) => {
                    return <MembersPreview member={member} key={idx} addMemberToTask={this.props.addMemberToTask}
                        getInitials={this.props.getInitials} />
                })}
            </div>
        )
    }
}
