import React, { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productosss } from "../mock/productosss";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [items , setItems] = useState([]);
    const { detalleId } = useParams();

    useEffect(() => {
        const getProducto = new Promise((resolve) => {
            setTimeout(() => {
            resolve(productosss);
            } , 0);
        }); 

            getProducto.then(respuesta => setItems(respuesta.find (productosss => productosss.id === detalleId)))
            
    },[detalleId] );


    return (
        <div>
            <ItemDetail item={items} />
        </div>
    );
};

export default ItemDetailContainer ;