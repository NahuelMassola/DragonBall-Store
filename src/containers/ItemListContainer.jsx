import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import {  productosss } from "../mock/productosss";

const ItemListContainer = () => {
  const [items , setItems] = useState([]); 
  const {categoriesId} = useParams();

  useEffect(() => {

    fetch("./productos.json")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      setItems(data); 
      console.log(data);
    });   

    const getItem = new Promise((resolve) => {
      setTimeout(() => {
      resolve(productosss);
    }, 0);
  }); 

    if (categoriesId) {
      getItem.then((respuesta) => {
        setItems(respuesta.filter(productosss => productosss.categoria === categoriesId));
      })
    } else {
      getItem.then((respuesta) => {
        setItems(respuesta);  
      })
      .catch ((error) => {
        console.log(error);
      })
      
    }

  }, [categoriesId]) ;

  return (
    <div>
      <ItemList items={items} ></ItemList>
    </div> );
};

export default ItemListContainer ;