import React, {Component} from 'react';
import StoriesList from "../components/StoriesList";

class StoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {listOfStories: []}
  }
  componentDidMount(){
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    fetch(url)
    .then(res => res.json())
    .then(returnedStories => this.setState({listOfStories: returnedStories}))
    .catch(err => console.error(err))
  }
  componentDidUpdate(){
    if(this.state.listOfStories.length > 0){
      const listOf20Stories = this.state.listOfStories.slice(0, 20)
      let listOf20StoriesWithUrl = []
      for(storyID of listOf20Stories){
        listOf20StoriesWithUrl.push("https://hacker-news.firebaseio.com/v0/item/" + storyID + ".json" )
      }
    }
  }
  render(){
    return(
      <div>
      <StoriesList/>
      <h1>:) </h1>
      </div>
    )
  }

}

export default StoriesContainer;
