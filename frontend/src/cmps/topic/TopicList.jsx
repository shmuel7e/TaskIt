import TopicPreview from "../topic/TopicPreview.jsx";
import React from 'react';

export default function TopicList(props) {
    return <ul className='topics-container flex align-start'>
        {props.board.topics.map((topic, i) =>
         <TopicPreview 
         deleteTopic={props.deleteTopic}
         addTask={props.addTask} 
         key={i} topic={topic}
         ></TopicPreview>)}
         </ul>
}