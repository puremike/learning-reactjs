import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    this.setState({ monsters: data });

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => this.setState({ monsters: json }))
    //   .catch((err) => {
    //     console.error(new Error(err));
    //   });
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState({ searchField: searchString });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className={"search-box"}
          onChangeHandler={onSearchChange}
          placeHolder={"Search Monster"}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
