import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import Search from "./components/Search/Search";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder='Search'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
