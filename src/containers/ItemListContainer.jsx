import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import productos from "../productos.json"



const ItemListContainer = () => {
  const [items , setItems] = useState([]);


  useEffect(() => {
    fetch("./productos.json")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      setItems(data); 
    });   

const getProductos = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  } , 2000);
}); 

    getProductos.then((respuesta) => {
      setItems(respuesta);  
    })
    .catch((error) => {
      
      console.log(error);
    });
  
  }, []) ;


  return (
      
    <div>
      <ItemList items={items} ></ItemList>
    </div> );
};

export default ItemListContainer ;