import { useEffect, useState } from "react";
import ItemList from "./ItemList"
/* import productos from "../productos.json" */
import { useParams } from "react-router-dom";
import { productosss } from "../productosss";




const ItemListContainer = () => {
  const [items , setItems] = useState([]); 

  const {categoriesId} = useParams();

  useEffect(() => {
    /* fetch("./productos.json")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      setItems(data); 
    }); */   

const getProductos = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productosss);
  } , 2000);
}); 

    if (categoriesId) {
      getProductos.then((respuesta) => {
        setItems(respuesta.filter(productosss => productosss.categoria === categoriesId));
      })
    } else {
      getProductos.then((respuesta) => {
        setItems(respuesta);  
      })
      
    }

  }, [categoriesId]) ;


  return (
      
    <div>
      <ItemList items={items} ></ItemList>
    </div> );
};

export default ItemListContainer ;

/* .catch((error) => {
      
  console.log(error);
}); */