import { Switch, Route, useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import Modal from './components/Modal';
import { BeerListContext } from './providers/beerList';
import Casamento from "./pages/Casamento";
import Confraternizacao from "./pages/Confraternizacao";
import Formatura from "./pages/Formatura";

import { Container } from "./styles";
import './reset.css';
import { Toaster } from 'react-hot-toast';

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
      <div><Toaster /></div>
      <Modal modalShow={modalShow} handleModal={handleModal} item={itemToAdd} />
      <header className="App-header">
        <h1 onClick={() => history.push("/")}>Inicio</h1>
        <div>
          <h3 onClick={() => history.push("/casamento")}>casamento</h3>
          <h3 onClick={() => history.push("/confraternizacao")}>confraternizacao</h3>
          <h3 onClick={() => history.push("/formatura")}>formatura</h3>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Container>
            <ul>
              {beerList.map((item, index) => (
                <li key={index}>
                  <div>
                    <img src={item.image_url} alt={item.name} />
                  </div>
                  <h3>{item.name} - {item.volume.value} L</h3>
                  <p>{item.description}</p>
                  <h5>Fabricado em {item.first_brewed}</h5>
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
