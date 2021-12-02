import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";

export default function Casamento() {
  const { beerCasamento, removeFromCasamento } = useContext(BeerListContext);

  return (
    <>
      <h1>Casamento</h1>
      <ul>
        {beerCasamento.map((item, index) => (
          <li ket={index}>
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.first_brewed}</p>
            <p>{item.description}</p>
            <p>{item.volume.value}</p>
            <button onClick={() => removeFromCasamento(item)}>Remover</button>
          </li>
        ))}
      </ul>
      {beerCasamento.length === 0 ? <h3>Não há bebidas.</h3> : null}
    </>
  );
}
