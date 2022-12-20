import { createContext, useState } from "react";
import { Iiten, IProvider } from "../interface";
import { getItens } from "../services/api/getItens";

interface IHomeContext {
    get: () => void;
    sherad(data: any): void;
    filteredProducts: Iiten[];
    cart: boolean;
    SetCart: React.Dispatch<React.SetStateAction<boolean>>;
    currentSale: Iiten[];
    setCurrentSale: React.Dispatch<React.SetStateAction<number>>;
    ContValue: () => number;
    AddItenCart: () => void;
    removeCart: () => void;
}

interface Isherad {
    sherad: string
}

export const HomeContext = createContext({} as IHomeContext)

export function HomeProvider({ children }: IProvider) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([] as Iiten[]);
    const [currentSale, setCurrentSale] = useState([] as Iiten[]);
    const [cart, SetCart] = useState(false);



    async function get() {
        const response = await getItens();
        setProducts(response);
        setFilteredProducts(response);
    }

    function sherad(data: Isherad) {
        const sheradTextToLower = data.toLowerCase();
        const sheradProdct = products.filter(
            (element: Iiten) =>
                element.name.toLowerCase().includes(sheradTextToLower) ||
                element.category.toLowerCase().includes(sheradTextToLower) ||
                element.price.toLocaleString().includes(sheradTextToLower)
        );
        setFilteredProducts(sheradProdct);
    }

    function ContValue() {
        const values = currentSale.map((element: Iiten) => element.price * element.quant);
        const value = values.reduce((valueOne, valueTwo) => valueOne + valueTwo, 0);
        return value;
    }
    function AddItenCart(product: Iiten) {
        SetCart(true);
        const valid = currentSale.find((element) => element.id === product.id);
        if (valid) {
            valid.quant = valid.quant + 1;
            const newList = currentSale.filter((element) => element.id !== valid.id);
            setCurrentSale([...newList, valid]);
        } else {
            product.quant = 1;
            setCurrentSale([...currentSale, product]);
        }
    }
    function removeCart(product: Iiten) {
        const item = currentSale.find((item) => item.id == product.id);
        const newValue = currentSale.filter((item) => item.id !== product.id);
        if (item.quant > 1) {
            item.quant = item.quant - 1;
            setCurrentSale([...newValue, item]);
        } else {
            setCurrentSale(newValue);
            if (newValue.length == 0) {
                SetCart(false);
            }
        }
    }
    return (
        <HomeContext.Provider value={{
            sherad,
            get,
            filteredProducts,
            cart,
            SetCart,
            currentSale,
            setCurrentSale,
            ContValue,
            AddItenCart,
            removeCart
        }}>
            {children}
        </HomeContext.Provider>
    )
}