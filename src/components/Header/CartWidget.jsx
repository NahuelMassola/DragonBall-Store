import ShoppingCartIcon from '@mui/icons-material/ShoppingCart.js';
import React, { useContext } from "react";

import {CartContext} from "../../context/CartContext";

// Componente Cart //

export const CartWidget = () => {
    const {cartTotal , cartItems} = useContext(CartContext);
    return (
        <div> 
            {
            cartItems.length === 0 ? (
            <></>
            ) : (
                <button type="button" className="btn position-relative" title="Ir al Carrito">
                    <ShoppingCartIcon color="primary"/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            )}
        </div> 
    )
}


