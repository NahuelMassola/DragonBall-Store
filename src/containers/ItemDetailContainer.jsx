import React, { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productosss } from "../mock/productosss";
import { useParams } from "react-router-dom";

//Componente contenedor del Detalle del Producto //
const ItemDetailContainer = () => {
    const [items , setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProducto = new Promise((resolve) => {
            setTimeout(() => {
            resolve(productosss);
            } , 1000);
        }); 
            getProducto.then(respuesta => setItems(respuesta.find (productosss => productosss.id === id)))
    },[id] );

    return (
        <div className="">
            <ItemDetail item={items} />
        </div>
    );
};

export default ItemDetailContainer ;