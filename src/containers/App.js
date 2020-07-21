import React, { Component } from 'react';
import axios from 'axios';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      serachField: ""
    };
  }

  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => this.setState({robots: response.data}))    
  }

  onInputChange = (e) => {
    this.setState({serachField: e.target.value})
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.serachField);
    });
    return (
      <div>
        <h1 className="text-center">ROBOFRIENDS APP</h1>
        <SearchBox onInputChange={this.onInputChange}/>
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots}/> 
          </ErrorBoundry>          
        </Scroll>               
      </div>
    );
  }
}

export default App;