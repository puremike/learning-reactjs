import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeHolder, onChangeHandler } = props;
  return (
    <input
      className={`search ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    ></input>
  );
};
export default SearchBox;
// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeHolder}
//         onChange={this.props.onChangeHandler}
//       ></input>
//     );
//   }
// }

// export default SearchBox;
