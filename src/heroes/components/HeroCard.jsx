import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;
  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  // const charactersByHero = <p>{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row g-0">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt="superhero" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/* {alter_ego !== characters && charactersByHero} */}
              <CharactersByHero alter_ego={alter_ego} characters={characters} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <li>
  <p>superhero: {superhero}</p>
  <p>publisher: {publisher}</p>
  <p>alter_ego: {alter_ego}</p>
  <p>first_appearance: {first_appearance}</p>
  <p>characters: {characters}</p>
</li>; */
}

// {
//     id: "dc-batman",
//     superhero: "Batman",
//     publisher: "DC Comics",
//     alter_ego: "Bruce Wayne",
//     first_appearance: "Detective Comics #27",
//     characters: "Bruce Wayne",
//   },
