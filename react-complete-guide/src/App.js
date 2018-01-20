import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
          {name: 'will', age: 41},
          {name: 'tara', age: 41},
          {name: 'noah', age: 0}
        ]


    }

  switchNameHandler = () => {
      //console.log("was clicked");
      // This WONT WORK // this.state.persons[0].name = "william";
      this.setState( {
        persons: [
          {name: 'william', age: 41},
          {name: 'tara', age: 41},
          {name: 'noah', age: 1}
        ]
      });
  }
  render() {
    return (
      <div className="App">
          <h1>ello, i'm a react app</h1>
          <p>thiss is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm noah mother</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'ello, i\'m a react app'));
  }
}

export default App;
