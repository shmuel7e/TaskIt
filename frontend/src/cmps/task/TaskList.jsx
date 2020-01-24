import React from 'react';
import TaskPreview from "../task/TaskPreview.jsx";

export default function taskList(props) {
    return <ul className="tasks-container">
        {props.topic.tasks.map((task, i) =>
            <TaskPreview
                id={task.id}
                key={task.id}
                index={i}
                task={task}
                topicId={props.topic.id}
                getInitials={props.getInitials}
                boardId={props.boardId}
            >
            </TaskPreview>)}
       
    </ul>
}