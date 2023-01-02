import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Iiten, IProvider } from "../interface";
import { api } from "../services/api/api";
import { getItens } from "../services/api/getItens";
import { removeId } from "../services/localStorage/saveId"
import { recoveryToken, removeToken } from "../services/localStorage/saveToken"

interface IHomeContext {
    modalCart: boolean;
    setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
    get: () => void;
    sherad(data: any): void;
    filteredProducts: Iiten[];
    cart: boolean;
    SetCart: React.Dispatch<React.SetStateAction<boolean>>;
    currentSale: Iiten[];
    setCurrentSale: React.Dispatch<React.SetStateAction<Iiten[]>>;
    ContValue: () => number;
    AddItenCart: (product: Iiten) => void;
    removeCart: (product: number) => void;
    logout: () => void;
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
    const [modalCart, setModalCart] = useState(false);
    const navigate = useNavigate();

    async function get() {
        const token = recoveryToken()
        if (!token) {
            navigate("/")
        }
        api.defaults.headers.Authorization = `Bearer ${token}`
        const response = await getItens();
        setProducts(response);
        setFilteredProducts(response);
    }

    function sherad({ sherad }: Isherad) {
        const sheradTextToLower = sherad.toLowerCase();
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
            setCurrentSale(data => [...data, product]);
        }
    }

    function removeCart(product: number) {
        const item = currentSale.find((item) => item.id == product);
        const newValue = currentSale.filter((item) => item.id !== product);
        if (item) {
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
    }

    function logout() {
        removeId()
        removeToken()
        navigate("/")
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <HomeContext.Provider value={{
            modalCart,
            setModalCart,
            sherad,
            get,
            filteredProducts,
            cart,
            SetCart,
            currentSale,
            setCurrentSale,
            ContValue,
            AddItenCart,
            removeCart,
            logout,
        }}>
            {children}
        </HomeContext.Provider>
    )
}