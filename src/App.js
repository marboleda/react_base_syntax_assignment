import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: "myUsername"
  }

  inputHandler = (newUsername) => {
    this.setState({
      username: newUsername
    })
  }

  
  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
