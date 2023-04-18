import { Component } from "react";
import "./card-list.style.css";
import Card from "./card/card";

const CardList = ({ monsters }) => {
  // const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, id, email } = monster;

        return <Card monsters={monster} />;
      })}
    </div>
  );
};

export default CardList;
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, id, email } = monster;

//           return <Card monsters={monster} />;
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
