import React, {Component} from 'react';
import StoriesList from "../components/StoriesList";

class StoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfStoriesID: [],
      listOf20Stories: []
    }
  }
  componentDidMount(){
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    fetch(url)
    .then(res => res.json())
    .then(returnedStories => this.setState({listOfStoriesID: returnedStories}))
    .catch(err => console.error(err))
  }
  componentDidUpdate(){
    if(this.state.listOfStoriesID.length > 0 && this.state.listOf20Stories.length === 0){
      const listOf20StoriesID = this.state.listOfStoriesID.slice(0, 20)
      let listOf20StoriesWithUrl = []
      for(let storyID of listOf20StoriesID){
        listOf20StoriesWithUrl.push(fetch("https://hacker-news.firebaseio.com/v0/item/" + storyID + ".json"))
      }
      const arrayOfPromises = []
      Promise.all(listOf20StoriesWithUrl)
      .then(responseArray => {
        for (let res of responseArray){
          arrayOfPromises.push(
          res.json())
        }
        Promise.all(arrayOfPromises)
        .then(returnedStoriesObject => this.setState({ listOf20Stories : returnedStoriesObject }))
      })
        .catch(err => console.log(err))
      }
    }



  render(){
    return(
      <div>
      <StoriesList listOf20Stories={this.state.listOf20Stories}/>
      <h1>:) </h1>
      </div>
    )
  }
}



export default StoriesContainer;
