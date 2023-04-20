import logo from "./logo.svg";
import "./App.css";
// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

//using a functional App;
const App = () => {
  console.log("rendered");
  // const [state, setState] = useState(initialValue);
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setMonsters(json));
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonster);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className={"search-box"}
        onChangeHandler={onSearchChange}
        placeHolder={"Search Monster"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   async componentDidMount() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     this.setState({ monsters: data });

//     // fetch("https://jsonplaceholder.typicode.com/users")
//     //   .then((res) => {
//     //     return res.json();
//     //   })
//     //   .then((json) => this.setState({ monsters: json }))
//     //   .catch((err) => {
//     //     console.error(new Error(err));
//     //   });
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState({ searchField: searchString });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className={"search-box"}
//           onChangeHandler={onSearchChange}
//           placeHolder={"Search Monster"}
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

// export default App;
