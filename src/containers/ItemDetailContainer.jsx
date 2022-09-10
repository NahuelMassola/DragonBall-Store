import React, { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos  from "../productos.json"


const ItemDetailContainer = () => {
    const [items , setItems] = useState([]);


    useEffect(() => {
        const getProducto = new Promise((resolve) => {
            setTimeout(() => {
                const producto = productos.find((prod) => prod.id === 1)
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
        <div className="container" >
            <ItemDetail item={items} />
        </div>
    );
};

export default ItemDetailContainer ;