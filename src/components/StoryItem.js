import React from 'react';

const StoryItem = (props) => {
  return(
    <div>
    <h1> Title: <a href={props.story.url} target="_blank" rel="noopener noreferrer">{props.story.title}</a> </h1>
    <h1> Author: {props.story.by} </h1>
    </div>
  )
}

export default StoryItem;
