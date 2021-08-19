import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Component/Card-list/Card-list.component";
import { SearchBox } from "./Component/Search-Box/SearchBox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchType: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monster: user }));
  }
  handleChange = (e) => {
    this.setState({ searchType: e.target.value });
  };

  render() {
    
    const { monster, searchType } = this.state;
    const filteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchType.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters-rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
