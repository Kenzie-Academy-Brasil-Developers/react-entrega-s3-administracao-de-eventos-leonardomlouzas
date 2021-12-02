import { Switch, Route, useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import Modal from './components/Modal';
import { BeerListContext } from './providers/beerList';
import Casamento from "./pages/Casamento";
import Confraternizacao from "./pages/Confraternizacao";
import Formatura from "./pages/Formatura";

import { Container } from "./styles";
import './reset.css';

function App() {
  const history = useHistory();
  const { beerList } = useContext(BeerListContext);
  const [modalShow, setModalShow] = useState(false);
  const [itemToAdd, setItemToAdd] = useState({});

  function handleClick(item) {
    setItemToAdd(item);
    handleModal();
  }

  function handleModal() {
    setModalShow(!modalShow);
  }
  return (
    <div className="App">
      <Modal modalShow={modalShow} handleModal={handleModal} item={itemToAdd} />
      <header className="App-header">
        <h1 onClick={() => history.push("/")}>Inicio</h1>
        <div>
          <h2 onClick={() => history.push("/casamento")}>casamento</h2>
          <h3 onClick={() => history.push("/confraternizacao")}>confraternizacao</h3>
          <h4 onClick={() => history.push("/formatura")}>formatura</h4>
        </div>
      </header>
      <hr></hr>
      <Switch>
        <Route exact path="/">
          <Container>
            <h1>Casamento</h1>
            <ul>
              {beerList.map((item, index) => (
                <li ket={index}>
                  <img src={item.image_url} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.first_brewed}</p>
                  <p>{item.description}</p>
                  <p>{item.volume.value}</p>
                  <button onClick={() => handleClick(item)}>Adicionar</button>
                </li>
              ))}
            </ul>
          </Container>

        </Route>
        <Route exact path="/casamento">
          <Casamento />
        </Route>
        <Route exact path="/confraternizacao">
          <Confraternizacao />
        </Route>
        <Route exact path="/formatura">
          <Formatura />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
