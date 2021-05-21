import "./App.css";
import React, { useEffect, useState } from "react";

//the card of the character
// now I want to change it dynamically so i use props and look at the matching ones from the api
function Card(props) {
  return (
    //as it reads from the api.
    // the films one is .length because I need to get to an array for the number of films
    <div>
      <h4>{props.character.name}</h4>
      <p>{props.character.height}</p>
      <p>{props.character.birth_year}</p>
      <p>{props.character.films.length} </p>
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
