import { BeerListProvider } from "./beerList";

export default function Providers({ children }) {
    return <BeerListProvider>
        {children}
    </BeerListProvider>
}