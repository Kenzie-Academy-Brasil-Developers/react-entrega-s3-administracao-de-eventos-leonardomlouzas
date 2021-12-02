import { Container } from "./styles";
import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";

export default function Formatura() {
  const { beerFormatura, removeFromFormatura } = useContext(BeerListContext);

  return (
    <Container>
      <h1>Formatura</h1>
      <ul>
        {beerFormatura.map((item, index) => (
          <li key={index}>
            <div>
              <img src={item.image_url} alt={item.name} />
            </div>
            <h3>
              {item.name} - {item.volume.value} L
            </h3>
            <p>{item.description}</p>
            <h5>Fabricado em {item.first_brewed}</h5>
            <button onClick={() => removeFromFormatura(item)}>Remover</button>
          </li>
        ))}
      </ul>
      {beerFormatura.length === 0 ? <p>Não há bebidas.</p> : null}
    </Container>
  );
}
