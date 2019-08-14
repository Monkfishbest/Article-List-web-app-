import React from 'react';
import StoryItem from "./StoryItem";

const StoriesList = (props) => {
  const storyNodes = props.listOf20Stories.map((story, index) => {
    return (
      <StoryItem key={index} story={story}></StoryItem>
    )
  })
  return(
    <div>
    {storyNodes}
    </div>
  )
}

export default StoriesList;
