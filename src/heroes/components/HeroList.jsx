import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  //* no se uso el state porque la data esta en duro, siempre es la misma y no estamos ingresando mas data.
  //* se memoriza por si algo cambia y se vuelve a renderizar el componente, solo se dispara cuando cambia publisher.
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        // <li key={hero.id}>{hero.superhero}</li>
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
