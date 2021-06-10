import React from "react";

class FilmCardClass extends React.Component {
  state = {
    filmData: {},
    isRed: false,
  };

  // "mounting" is like starting the component just before showing it to the user
  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          filmData: data,
        });
      });
  }

  // what is shown to the user
  render() {
    return <div>{this.state.filmData.title}</div>;
  }
}

export default FilmCardClass;
