import { Container } from "./styles";
import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";

export default function Casamento() {
  const { beerCasamento, removeFromCasamento } = useContext(BeerListContext);

  return (
    <Container>
      <h2>Casamento</h2>
      <ul>
        {beerCasamento.map((item, index) => (
          <li key={index}>
            <div>
              <img src={item.image_url} alt={item.name} />
            </div>
            <h3>
              {item.name} - {item.volume.value} L
            </h3>
            <p>{item.description}</p>
            <h5>Fabricado em {item.first_brewed}</h5>
            <button onClick={() => removeFromCasamento(item)}>Remover</button>
          </li>
        ))}
      </ul>
      {beerCasamento.length === 0 ? <p>Não há bebidas.</p> : null}
    </Container>
  );
}
