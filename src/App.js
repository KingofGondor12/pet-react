import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    pets: ['Zazzles', 'Muffin Boots', 'Snugglelumps']
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {
          this.state.pets.map(pet => <p>{pet}</p>)
        }
      </div>
    );
  }

  componentDidMount() {

    axios.get('/api/pets')
      .then(function (response) {
        console.log('Getting response!')
        console.log(response);
      })
      .catch(function (error) {
        console.log('Whoops')
        console.log(error);
      });

  }

}

export default App;
