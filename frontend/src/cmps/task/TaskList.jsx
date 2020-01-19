import React from 'react';
import TaskPreview from "../task/TaskPreview.jsx";
import AddTask from "../task/AddTask.jsx";

export default function taskList(props) {
    return <ul>
        {props.topic.tasks.map((task, i) =>
            <TaskPreview key={i} task={task} topicId={props.topic.id}></TaskPreview>)}
            <AddTask addTask={props.addTask} topicId={props.topic.id}/>
    </ul>
}