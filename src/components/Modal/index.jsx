import { useContext } from "react";
import toast from "react-hot-toast";
import { BeerListContext } from "../../providers/beerList";
import { Background, Container } from "./styles";

export default function Modal({ modalShow, handleModal, item }) {
  const { addToCasamento, addToConfraternizacao, addToFormatura } =
    useContext(BeerListContext);

  function handleClick(bebida, where) {
    if (where === 1) {
      addToCasamento(bebida);
    } else if (where === 2) {
      addToConfraternizacao(bebida);
    } else {
      addToFormatura(bebida);
    }
    toast.success("Bebida adicionada!");
    handleModal();
  }
  return (
    <>
      {modalShow ? (
        <Background>
          <Container>
            <div>
              <h3>
                {item.name} <button onClick={handleModal}>Cancelar</button>
              </h3>
              <hr></hr>
              <h4>Adicionar:</h4>
              <button onClick={() => handleClick(item, 1)}>Ao Casamento</button>
              <button onClick={() => handleClick(item, 2)}>
                À Confraternização
              </button>
              <button onClick={() => handleClick(item, 3)}>À Formatura</button>
            </div>
          </Container>
        </Background>
      ) : null}
    </>
  );
}
