import React, { useState , useContext , createContext} from "react";

export const CartContext = createContext([]);

export const useCartContex = () => useContext(CartContext);

const CustomProvider = ({ children }) => {
    const [ cartItems , setCartItems ] = useState([]);

    console.log(cartItems);

    // Funcion agregar item //

    const addItem = (item , quantity) => {     
        if (isInCart(item.id)) {
            let producto = cartItems.find(x => x.id === item.id)
            cartItems[cartItems.indexOf(producto)].quantity += quantity
            setCartItems([...cartItems])
        } else {
            setCartItems([...cartItems , {...item, quantity: quantity}])
        }
    }

    // Funcion eliminar item //

    const removeItem = (id) => {
        setCartItems(cartItems.filter((producto) => producto.id !== id))
    }

    const clear = () => {   
        setCartItems([]);
    }

    const isInCart = (id) => {
        return cartItems.some((producto) => producto.id === id) ? true : false
    }

    return (
        <CartContext.Provider value={{ cartItems , addItem, removeItem ,clear}}>
            {children}
        </CartContext.Provider>
    )

}

export default CustomProvider ;