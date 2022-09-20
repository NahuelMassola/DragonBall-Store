import React, { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productosss } from "../mock/productosss";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

//Componente contenedor del Detalle del Producto //
const ItemDetailContainer = () => {
    const [items , setItems] = useState([]);
    const [loading , setLoading] = useState(true)
    const [ error , setError] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        const getProducto = new Promise((resolve) => {
            setTimeout(() => {
            resolve(productosss);
            } , 1000);
        }); 
            getProducto.then(respuesta => setItems(respuesta.find (productosss => productosss.id === id))) 
            .catch (() => {
                setError(true)
            })
            .finally (() =>{
                setLoading(false)
            })
    },[id] );

    return (
        <div>
        {
        loading ? (
        <Loader />
        ) : (
            error ? (
            <h1>We're sorry, something went wrong...</h1>) : (<ItemDetail item={items} />
        ))}
        </div> 
    );
};

export default ItemDetailContainer ;