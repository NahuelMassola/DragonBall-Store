import React, { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getFirestore , doc , getDoc } from "firebase/firestore"

//Componente contenedor del Detalle del Producto //
const ItemDetailContainer = () => {
    const [items , setItems] = useState([]);
    const [loading , setLoading] = useState(true)
    const [ error , setError] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const respuesta = doc( db , "items" , `${id}` );
            getDoc(respuesta).then((snapShot) => {
                if (snapShot.exists()) {
                    setItems({id:snapShot.id, ...snapShot.data()});
                    setLoading(false);
                setError()
                }
            });
    },[id] );

    return (
        <div>
        {
        loading ? (
        <Loader />
        ) : (
            error ? (
            <h1>We're sorry, something went wrong...</h1>) : (<div className="vh-100"><ItemDetail item={items} /></div>
        ))}
        </div> 
    );
};

export default ItemDetailContainer ;