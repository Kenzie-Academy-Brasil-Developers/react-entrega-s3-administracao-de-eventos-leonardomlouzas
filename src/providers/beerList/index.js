import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const BeerListContext = createContext([]);

export const BeerListProvider = ({ children }) => {
    const [beerList, setBeerList] = useState([]);
    const [beerCasamento, setBeerCasamento] = useState([]);
    const [beerConfraternizacao, setBeerConfraternizacao] = useState([])
    const [beerFormatura, setBeerFormatura] = useState([]);

    function addToCasamento(item) {
        setBeerCasamento([...beerCasamento, item]);
    }

    function removeFromCasamento(item) {
        const newBeers = beerCasamento.filter(beer => beer.id !== item.id);
        setBeerCasamento(newBeers);
    }

    function addToConfraternizacao(item) {
        setBeerConfraternizacao([...beerConfraternizacao, item]);
    }
    function removeFromConfraternizacao(item) {
        const newBeers = beerConfraternizacao.filter(beer => beer.id !== item.id);
        setBeerConfraternizacao(newBeers);
    }

    function addToFormatura(item) {
        setBeerFormatura([...beerFormatura, item]);
    }

    function removeFromFormatura(item) {
        const newBeers = beerFormatura.filter(beer => beer.id !== item.id);
        setBeerFormatura(newBeers);
    }

    useEffect(() => {
        api
            .get("/beers")
            .then((response) => {
                setBeerList(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <BeerListContext.Provider value={{ beerList, beerCasamento, beerConfraternizacao, beerFormatura, addToCasamento, removeFromCasamento, addToConfraternizacao, removeFromConfraternizacao, addToFormatura, removeFromFormatura }}>
            {children}
        </BeerListContext.Provider>
    )
}