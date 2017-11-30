import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    pets: [],
    owners: []
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {
          this.state.pets.map(pet => <p>{pet}</p>)
        }
        {
          this.state.owners.map(owner => <p>{owner}</p>)
        }
      </div>
    );
  }

  componentDidMount() {

    axios.get('/api/pets')
      .then((response) => {
        this.setState( {
          pets: response.data
        })
        console.log('Getting response!')
        console.log(response);
      })
      .catch((error) => {
        console.log('Whoops')
        console.log(error);
      });
    axios.get('/api/owners')
      .then((response) => {
        this.setState( {
          owners: response.data
        })
        console.log('Getting response!')
        console.log(response);
      })
      .catch((error) => {
        console.log('Whoops!')
        console.log(error);
      })
  }

}

export default App;
