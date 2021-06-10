import React, { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard";

function MainContent() {
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters([...characters, ...data.results]);

        console.log(data);

        setNextUrl(data.next);
      });
  }, []);

  function getMore(event) {
    console.log(event);
    fetch(nextUrl)
      .then((response) => response.json())

      .then((data) => {
        setCharacters([...characters, ...data.results]);
        setNextUrl(data.next);
      });
  }

  return (
    <div className="App">
      <h1 className="title"> Star Wars Catalog</h1>
      <div className="container">
        {characters.map((character) => (
          <CharacterCard
            name={character.name}
            height={character.height}
            birth_year={character.birth_year}
            films={character.films.length}
            id={character.url.split("/")[5]}
          ></CharacterCard>
        ))}
      </div>
      <div className="btn-place">
        <button className="btn" onClick={getMore} data-cy="btn-load-more">
          Load More_
        </button>
      </div>
    </div>
  );
}
export default MainContent;
