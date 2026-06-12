import { useContext , createContext} from 'react';
import { products } from '../data/products';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const allProducts = products
    return (
        <ProductContext.Provider value={{allProducts}}>
        {children}
        </ProductContext.Provider>
    )
}


export const useProducts = () => useContext(ProductContext);
