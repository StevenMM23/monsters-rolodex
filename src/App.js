import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    //Normal API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(this.setState)
        )
      );
  }

  onSearchChange = (event) => {
    const x = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField: x };
    });
  };

  render() {
    console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monster-search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
