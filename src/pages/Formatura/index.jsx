import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";

export default function Formatura() {
  const { beerFormatura, removeFromFormatura } = useContext(BeerListContext);

  return (
    <>
      <h1>Casamento</h1>
      <ul>
        {beerFormatura.map((item, index) => (
          <li ket={index}>
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.first_brewed}</p>
            <p>{item.description}</p>
            <p>{item.volume.value}</p>
            <button onClick={() => removeFromFormatura(item)}>Remover</button>
          </li>
        ))}
      </ul>
      {beerFormatura.length === 0 ? <h3>Não há bebidas.</h3> : null}
    </>
  );
}
