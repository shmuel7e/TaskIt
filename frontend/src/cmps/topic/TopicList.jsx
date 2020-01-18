import TopicPreview from "../topic/TopicPreview.jsx";
import React from 'react';

export default function TopicList(props) {
    return <ul className='topics-container flex'>
        {props.board.topics.map((topic, i) =>
         <TopicPreview key={i} topic={topic}></TopicPreview>)}
         </ul>
}