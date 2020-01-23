import React, { Component } from 'react';
import CheckListList from '../taskModal/modalSideBar/checkList/CheckListList.jsx';

export default class ModalActivity extends Component {


    onGetInitials = (userName) => {
        return this.props.getInitials(userName);
    }


    setdueTime = (dueTime) => {
        return dueTime;
    }

    render() {
        const {task, changeTodo} = this.props;
        return (
            <div>
            {task.checkLists ? <CheckListList changeTodo={changeTodo} checkLists={task.checkLists}/> : ''} 


                {task.members.length ? <h3 className="members-on-task-title">Members</h3> : ''}
                <div className="members-on-task flex">
                    {task.members.map((member, idx) => {
                        return <div style={{ background: member.bgColor }} data-toggle="tooltip" title={member.username} className="member-name-initials" key={idx}>  {this.onGetInitials(member.username)} </div>
                    })}
                </div>

                {task.labels.length ? <h3 className="members-on-task-title">Labels</h3> : ''}
                <div className="labels-on-task flex">
                    {task.labels.map((label, idx) => {
                        return <div style={{ background: label.color }} data-toggle="tooltip" title={label.name} className="label-name-initials" key={idx}> </div>
                    })}
                </div>

                {task.dueTime === '' ? '' : <div > <h3 className="members-on-task-title">Due Time</h3> {this.props.task.dueTime} </div>}

            </div>
        )
    }
}
