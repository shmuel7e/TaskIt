import React from 'react';
import TaskPreview from "../task/TaskPreview.jsx";
<<<<<<< HEAD

=======
// import AddTask from "../task/AddTask.jsx";
>>>>>>> 13259b36eccfc70c17903a5e0b4a3581bb1f4a1f

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
            >
            </TaskPreview>)}
       
    </ul>
}