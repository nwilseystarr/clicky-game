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
    }
  }

  //onclick 
  //when click on card change value to true if is already true you lose 
  checkScore(id) {
    let arrayCopy = [...this.state.people]
    console.log(this.state.people)
    let selectedCard
    arrayCopy.forEach(element => {
      if (element.id === id) {
        element.clicked = true
        selectedCard = element
      }
    })

    if (selectedCard.clicked === true) {
      alert("Game Over")
    } else {
      this.shuffleArray(arrayCopy)
      this.setState({ score: this.state.score + 1, people: arrayCopy })
      console.log(this.state.score)
    }
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


  //check if the photo has been clicked 
  //true = you lose 
  //false = shuffle the cards


  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {/*Why do we need state below?*/}
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
