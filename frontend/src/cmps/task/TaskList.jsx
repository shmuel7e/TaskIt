import TaskPreview from "../task/TaskPreview.jsx";
import React from 'react';

export default function taskList(props) {
    return <ul>
        {props.topic.tasks.map((task, i) =>
            <TaskPreview key={i} task={task}></TaskPreview>)}
        <div className='add-task-container'>
            <span className="icon-plus"> </span>
            Add another task
        </div>
    </ul>
}