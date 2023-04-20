import "./card-list.css";

const Card = ({ monsters }) => {
  const { name, id, email } = monsters;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

// class Card extends Component {
//   render() {
//     const { name, id, email } = this.props.monsters;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`Monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2`}
//         ></img>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

// export default Card;
