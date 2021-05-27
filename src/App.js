import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//the card of the character
// now I want to change it dynamically so i use props and look at the matching ones from the api
function Card(props) {
  //as it reads from the api.
  // the films one is .length because I need to get to an array for the number of films

  return (
    <div className="card">
      <h4>{props.character.name}</h4>
      <p>Height:{props.character.height}</p>
      <p>Birth Year:{props.character.birth_year}</p>
      <p>Number of Films:{props.character.films.length} </p>
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

  // Load more will change the state of the app, load more on the bottom of the page
  function loadMore() {
    // fetch the next url
    fetch(nextUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // update the state
        setListCharacters([...listCharacters, ...data.results]);
        // set the next of the page
        setNextUrl(data.next);
      });
  }

  return (
    <Router>
      <Switch>
        <Route to="/">
          <div className="App">
            <h1> Star Wars Catalog</h1>
            <div className="card-container">
              {listCharacters.map(function (character) {
                return <Card character={character}></Card>;
              })}
            </div>
            <button onClick={loadMore}>Load More</button>
          </div>
        </Route>
      </Switch>
    </Router>
    // this button is related to the Load more function which allows the user to load more of the star wars characters
  );
}

export default App;
