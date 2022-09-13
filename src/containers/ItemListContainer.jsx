import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import {  productosss } from "../mock/productosss";

// Componente Contenedor de Lista del producto //
const ItemListContainer = () => {
  const [items , setItems] = useState([]); 
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
      .catch ((error) => {
        console.log(error);
      })
    }
  }, [id]) ;

  return (
    <div>
      <ItemList items={items} ></ItemList>
    </div> );
};

export default ItemListContainer ;