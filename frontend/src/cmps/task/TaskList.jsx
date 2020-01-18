import React from 'react';
import TaskPreview from "../task/TaskPreview.jsx";
import AddTask from "../task/AddTask.jsx";

export default function taskList(props) {
    return <ul>
        {props.topic.tasks.map((task, i) =>
            <TaskPreview key={i} task={task}></TaskPreview>)}
            <AddTask/>
    </ul>
}