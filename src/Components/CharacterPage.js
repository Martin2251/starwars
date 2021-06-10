import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FilmCard from "../FilmCard";

function CharacterPage() {
  let { id } = useParams();
  const [details, setDetails] = useState([]);
  const [listFilm, setListFilm] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);

        data.films.map((film) => {
          fetch(film)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setListFilm([...listFilm, data.title]);
            });
        });
      });
  }, []);

  return (
    <Container>
      <Name>{details.name}</Name>
      <SecPage>
        <Line>Height={details.height}</Line>
        <Line>Eye Color={details.eye_color}</Line>
        <Line>Birth Date={details.birth_year}</Line>
        <Line>Hair Color={details.hair_color}</Line>
      </SecPage>
      <Films>Films={details.films?.length}</Films>

      <ListFilm>
        {details.films &&
          details.films.map((film) => <FilmCard url={film}></FilmCard>)}
      </ListFilm>
      {/* {details.films && details.films.map(film => <FilmCardClass url={film}></FilmCardClass>)} */}

      <div className="btn-place">
        <Link to={"/"}>
          <Btn className="btn">Back to home_</Btn>
        </Link>
      </div>
    </Container>
  );
}

export default CharacterPage;
const Container = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
`;

const SecPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5rem;
`;

const Line = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f46d00;
  width: 15rem;
  height: 50px;
`;

const Films = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px none #f46d00;
  width: 15rem;
  height: 50px;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 5rem;
`;
const Name = styled.h1`
  color: #f46d00;
  margin-left: 10rem;
  margin-top: 5rem;
`;
const Btn = styled.button`
  font-size: 1rem;
`;
const ListFilm = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f46d00;
  width: 15rem;
  height: 30rem;
  margin-left: 5rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
