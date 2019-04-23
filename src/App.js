import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron';
import PeopleCard from './components/PeopleCard';
import Wrapper from './components/Wrapper';
import people from './people.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkScore = this.checkScore.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.state = {
      people,
      score: 0,
      clickedIds: [],
      highScore: 0,
      status: 'Play the game!'
    };
  }

  //when click on card change value to true if is already true you lose 
  checkScore = id => {
    let arrayCopy = [...this.state.people]
    let clickedIds = this.state.clickedIds;

    //Incorrect Guess
    if (clickedIds.includes(id)) {
      this.setState({ clickedIds: [], score: 0, status: "You guessed incorrectly!" })
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score })
      }

      return;
    } 
    //Correct Guess
    else {
      clickedIds.push(id)
      this.setState({ status: "You guessed correctly!" })
      if (clickedIds.length === 12) {
        this.setState({ highScore: this.state.score })
        if (this.state.score > this.state.highScore) {
          this.setState({ highScore: this.state.score })
        }
        return;
      }
    }

    arrayCopy.forEach(element => {
      if (element.id === id) {
        element.clicked = true
      }
    })

    this.shuffleArray(arrayCopy)
    this.setState({ score: this.state.score + 1, people: arrayCopy })
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          status={this.state.status} 
          highScore={this.state.highScore}
        />
        <Jumbotron/>
        <Wrapper>
          {this.state.people.map(people => (
            <PeopleCard
              key={people.id}
              checkScore={this.checkScore}
              id={people.id}
              image={people.image} />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
