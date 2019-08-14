import React, {Component} from 'react'
import "./StorySearch.css";

class StorySearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      input : ""
    }
    this.handleSearchFunction = this.handleSearchFunction.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSearchFunction(evt){
    this.setState({input: evt.target.value})
  }

  handleSubmit(evt){
    evt.preventDefault();
    const input = this.state.input.trim();
    if(!input){
      return ;
    }
    this.props.onHandleSearch(input)
    this.setState({input: ""})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
      <input type="text" placeholder="Search..." value={this.state.input} onChange={this.handleSearchFunction}></input>
      <button type="submit">Search!</button>
      </form>
    )
  }
}

export default StorySearch
