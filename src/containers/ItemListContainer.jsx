import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import {  productosss } from "../mock/productosss";
import Loader from "../components/Loader"

// Componente Contenedor de Lista del producto //
const ItemListContainer = () => {
  const [items , setItems] = useState([]); 
  const [loading , setLoading] = useState(true)
  const [ error , setError] = useState(false)
  const {id} = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
      resolve(productosss);
    }, 1000);
  }); 

    if (id) {
      getItem.then((respuesta) => {
        setItems(respuesta.filter(productosss => productosss.categoria === id));
      })
    } else {
      getItem.then((respuesta) => {
        setItems(respuesta);  
      })
      .catch (() => {
        setError(true)
      })
      .finally (() =>{
        setLoading(false)
      })
    }
  }, [id]) ;

  return (
    <div>
      {
        loading ? (
          <Loader />
          ) : (
            error ? (
              <h1>We're sorry, something went wrong...</h1>) : (<ItemList items={items} />
        ))}
    </div> 
    );
};

export default ItemListContainer ;