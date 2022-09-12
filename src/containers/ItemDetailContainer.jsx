import React, { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productosss } from "../productosss";


const ItemDetailContainer = () => {
    const [items , setItems] = useState([]);


    useEffect(() => {
        const getProducto = new Promise((resolve) => {
            setTimeout(() => {
                const producto = productosss.find((prod) => prod.id === 1)
            resolve(producto);
            } , 2000);
        }); 
            getProducto.then((respuesta) => {
                setItems(respuesta);  
            })
            
            .catch((error) => {
                console.log(error);
            })

    },[] );


    return (
        <div>
            <ItemDetail item={items} />
        </div>
    );
};

export default ItemDetailContainer ;