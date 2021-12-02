import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";

export default function Confraternização() {
  const { beerConfraternizacao, removeFromConfraternizacao } =
    useContext(BeerListContext);

  return (
    <>
      <h1>Casamento</h1>
      <ul>
        {beerConfraternizacao.map((item, index) => (
          <li ket={index}>
            <img src={item.image_url} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.first_brewed}</p>
            <p>{item.description}</p>
            <p>{item.volume.value}</p>
            <button onClick={() => removeFromConfraternizacao(item)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      {beerConfraternizacao.length === 0 ? <h3>Não há bebidas.</h3> : null}
    </>
  );
}
