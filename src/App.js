import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monster: user }))
  }

  eventHandler = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monster, searchField } = this.state;
    const filteredmonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1 className="title">Monster Rolodex</h1>
        <Search
          placeholder="Search Monsters ..."
          eventHandler={this.eventHandler}
        />
        <CardList monster={filteredmonsters}>
        </CardList>
      </div>
    )
  }
}

export default App;
