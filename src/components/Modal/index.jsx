import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";
import { Background, Container } from "./styles";

export default function Modal({ modalShow, handleModal, item }) {
  const { addToCasamento, addToConfraternizacao, addToFormatura } =
    useContext(BeerListContext);

  function handleClick(bebida, where) {
    if (where === 1) {
      addToCasamento(bebida);
      console.log("added to wedding");
    } else if (where === 2) {
      addToConfraternizacao(bebida);
      console.log("added to confr");
    } else {
      addToFormatura(bebida);
      console.log("Added to formature");
    }
    handleModal();
  }
  return (
    <>
      {modalShow ? (
        <Background>
          <Container>
            <div>
              <h2>{item.name}</h2>
              <button onClick={() => handleClick(item, 1)}>Ao Casamento</button>
              <button onClick={() => handleClick(item, 2)}>
                À Confraternização
              </button>
              <button onClick={() => handleClick(item, 3)}>À Formatura</button>
              <button onClick={handleModal}>Cancelar</button>
            </div>
          </Container>
        </Background>
      ) : null}
    </>
  );
}
