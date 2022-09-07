import { useEffect, useState } from "react";
import ItemList from "./ItemList"



const ItemListContainer = () => {
  const [items , setItems] = useState([]);
  

  useEffect(() => {
  
  const productos = [
    {"id": 1 , "nombre": "Goku" , "imagen" :"goku.png" , "descripcion":"Figura de acción Dragon Ball Z" , "precio": 15000 , "categoria": 1},
    {"id": 2 , "nombre": "Veguetta" , "imagen" : "Veguetta.png" ,"descripcion":" Figura de acción Dragon Ball Z" , "precio": 12500, "categoria": 1},
    {"id": 3 , "nombre": "Bills" , "imagen" : "Bills.png" , "descripcion":"Figura de acción Dragon Ball Super" , "precio": 11500, "categoria" :1},
    {"id": 4 , "nombre": "Veguetta Blue" , "imagen" : "VeguettaBlue.png" , "descripcion":"Figura de acción Dragon Ball Super" , "precio":14000 ,"categoria": 1},
    {"id": 5 , "nombre": "Goku Rose" , "imagen" : "GokuRose1.png" ,"descripcion": "Figura de acción Dragon Ball Super", "precio": 13500, "categoria": 1},
    {"id": 6 , "nombre": "Goku SS4" , "imagen" : "GokuSS4.png" , "descripcion":"Figura de acción Dragon Ball Super" , "precio": 16000, "categoria": 1},
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