import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textLength: 0,
    text: ''
  }

  inputChangeListener = event => {
    let newText = { ...this.state.text }
    let newLength = { ...this.state.textLength };

    newText = event.target.value.trim();
    newLength = newText.length;

    this.setState({
      textLength: newLength,
      text: newText
    });

    console.log(this.state);
  }

  deleteCharFromText = char => {
    let newText = this.state.text.split('');
    let newLength;

    const indexToRemove = newText.findIndex(c => c === char);

    newText.splice(indexToRemove, 1);

    newText = newText.join('');
    newLength = newText.length;

    this.setState({
      textLength: newLength,
      text: newText
    })
  }

  charComponentGenerator = () => {
    return this.state.text.split('').map((char, index) => {
      return (
        <CharComponent
          key={char + Math.floor(Math.random() * 10000000000000)} // lol
          letter={char}
          click={this.deleteCharFromText.bind(this, char)}
        />
      );
    });
  }

  render() {
    let characterComponent = null;

    if (this.state.textLength > 0)
      characterComponent = this.charComponentGenerator();

    return (
      <div className="App">
        <input
          placeholder="type different letters"
          onChange={this.inputChangeListener}
          type="text"
          value={this.state.text} />
        <p>length: {this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength} />
        {characterComponent}
      </div>
    );
  }

}

export default App;
