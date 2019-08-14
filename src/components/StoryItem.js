import React from 'react';
import './StoryItem.css';

const StoryItem = (props) => {
  return(
    <div className="story-item">
    <h1> Title: <a href={props.story.url} target="_blank" rel="noopener noreferrer">{props.story.title}</a> </h1>
    <h1> Author: {props.story.by} </h1>
    </div>
  )
}

export default StoryItem;
