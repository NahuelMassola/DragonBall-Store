import React from "react";
import Item from "../components/Item"

//Componente Lista del Producto //
const ItemList = ({items})=> {
    return (
        <div className="container">
            <div className="row">
                {items.map(item =>
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 py-3">
                    <Item  id={item.id} nombre={item.nombre} imagen={item.imagen} precio={item.precio} descripcion={item.descripcion}/>
                </div>)}
            </div>
        </div> 
)}

export default ItemList ;
