import "./App.css";
import React, { useEffect, useState } from "react";

//the card of the character

function Card() {
  return (
    <div>
      <h4>Luke Skywalker</h4>
      <p>Height: 177cm</p>
      <p>Birth: 177cm</p>
      <p>5 films </p>
    </div>
  );
}

function App() {
  const [listCharacters, setListCharacters] = useState([]);
  // its an array of data coming back and we want to display the characters
  const [nextUrl, setNextUrl] = useState("");

  // make a request as soon as you land on the page use Effect takes two argument and dependency list
  // using the star wars api always fetch a response that is Json, I want the list of characters (data.results).and the next URL (data.next) which is
  useEffect(function () {
    fetch("https://swapi.dev/api/people")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setListCharacters(data.results);
        setNextUrl(data.next);
      });
  }, []);

  return (
    <div className="App">
      {listCharacters.map(function (character) {
        return <Card character={character}></Card>;
      })}
    </div>
  );
}

export default App;
