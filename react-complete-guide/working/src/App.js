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

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'will', age: 41},
        {name: event.target.value, age: 41},
        {name: 'noah', age: 0}
      ]
    });
}
  render() {
    const style = {
      'background-color': '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
          <h1>ello, i'm a react app</h1>
          <p>thiss is really working!</p>
          <button 
            style={style}
            onClick={this.switchNameHandler}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            change={this.nameChangedHandler}>I'm noah mother</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'ello, i\'m a react app'));
  }
}

export default App;
