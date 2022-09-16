import React, { useState , useContext , createContext} from "react";
import { productosss } from "../mock/productosss";

const CartContext = createContext([]);

export const useCartContex = () => useContext(CartContext);

const CustomProvider = ({ children }) => {
    const [ cartItems , setCartItems ] = useState([]);
    const [ quantity , setQuantity ] = useState(0);

    console.log(cartItems);

    const addItem = (item , quantity) => {
        let newCart;
        let producto = cartItems.find(productosss => productosss.id === item.id);
        if (producto) {
            setQuantity(productosss.quantity += quantity) ;
            newCart = [...cartItems];
        } else {
            newCart = [...cartItems , {...item ,quantity: quantity}];
        }
        setCartItems(newCart);
    }

    const removeItem = (id) => {
        setCartItems(cartItems.filter((producto) => producto.id !== id))
    }

    const clear = () => {
        setCartItems([]);
    }

    const isInCart = (id) => {
        return cartItems.find((producto) => producto.id === id) ? true : false
    }

    return (
        <CartContext.Provider value={{ cartItems , quantity , addItem, removeItem ,clear}}>
            {children}
        </CartContext.Provider>
    )

}

export default CustomProvider ;