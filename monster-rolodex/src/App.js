import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

//functional app
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           My name is <em>Michael</em>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//Class Component
class App extends Component {
  constructor() {
    super();

    this.state = {
      //hardcoding the data
      // monsters: [
      //   { name: "Michael", id: "123deef123" },
      //   { name: "Mary", id: "123de23de23" },
      //   { name: "Victoria", id: "123thef123" },
      //   { name: "Sandra", id: "123defr123" },
      // ],
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
