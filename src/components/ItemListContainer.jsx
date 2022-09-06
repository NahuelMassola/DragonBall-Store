import { useEffect, useState } from "react";
import ItemList from "./ItemList"



const ItemListContainer = () => {
  const [items , setItems] = useState([]);
  

  useEffect(() => {
  
  const productos = [
    {"id": 1 , "nombre": "Goku" , "imagen" :"../components/ImagesCard/gogueta.png" , "descripcion":"Figura de acción Dragon Ball Z" , "precio": 15000 , "categoria": 1},
    {"id": 2 , "nombre": "Veguetta" , "imagen" : "" ,"descripcion":" Figura de acción Dragon Ball Z" , "precio": 12500, "categoria": 1},
    {"id": 3 , "nombre": "Gohan" , "imagen" : "" , "descripcion":"Figura de acción Dragon Ball Z" , "precio": 11500, "categoria" :1},
    {"id": 4 , "nombre": "Goku SS3" , "imagen" : "" , "descripcion":"Figura de acción Dragon Ball Z" , "precio":14000 ,"categoria": 1},
    {"id": 5 , "nombre": "Goku Rose" , "imagen" : "" ,"descripcion": "Figura de acción Dragon Ball Z", "precio": 13500, "categoria": 1},
    {"id": 6 , "nombre": "Goku Black" , "imagen" : "" , "descripcion":"Figura de acción Dragon Ball Z" , "precio": 16000, "categoria": 1},
];

const getProductos = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    } , 2000);
  }); 

      getProductos.then((respuesta) => {
        setItems(respuesta);  
      });
    }, []) ;



    return (
        
      <div className="container">
        <ItemList items={items} ></ItemList>
      </div> );
};

export default ItemListContainer ;