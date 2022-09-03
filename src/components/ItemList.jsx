import React from "react";
import Item from "./Item";


const ItemList = () => {

    const productos = [
        {id: 1 , nombre: "Goku" , img :{ } , descripcion:"Figura de acción Dragon Ball Z" , precio: 15000 , categoria: 1},
        {id: 2 , nombre: "Veguetta" , img : {} ,descripcion:" Figura de acción Dragon Ball Z" , precio: 12500, categoria: 1},
        {id: 3 , nombre: "Gohan" , img : {} , descripcion:"Figura de acción Dragon Ball Z" , precio: 11500, categoria :1},
        {id: 4 , nombre: "Goku SS3" , img : {} , descripcion:"Figura de acción Dragon Ball Z" , precio:14000 ,categoria: 1},
        {id: 5 , nombre: "Goku Rose" , img : {} ,descripcion: "Figura de acción Dragon Ball Z", precio: 13500, categoria: 1},
        {id: 6 , nombre: "Goku Black" , img : {} , descripcion:"Figura de acción Dragon Ball Z" , precio: 16000, categoria: 1},
    ];

    const items = productos.map(items => (
        <Item nombre={items.nombre} key={items.id} descripcion={items.descripcion} precio={items.precio} imagen={items.img}></Item>
    ))
    return (
        <div>
            <div className="row d-flex justify-content-center">{items}  </div>
        </div>
    );
}

export default ItemList ;