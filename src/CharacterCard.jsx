import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Link
      to={`/character/${props.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="character">
        <h2>{props.name}</h2>
        <p>Height: {props.height}</p>
        <p>Birth Year: {props.birth_year}</p>
        <p>Films: {props.films}</p>
      </div>
    </Link>
  );
}
export default CharacterCard;
