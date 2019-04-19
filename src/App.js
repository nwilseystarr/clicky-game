import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron';
import PeopleCard from './components/PeopleCard';
import Wrapper from './components/Wrapper';
import people from './people.json';

class App extends Component {
  state = {
    people
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.people.map(people => (
            <PeopleCard
              id={people.id}
              image={people.image} />
          ))}
        </Wrapper>
      </div>
    );
  }

}

export default App;
