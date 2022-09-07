import React from "react";
import ItemCount from "./ItemCount"

const Item = (props) => {
    return (
        <div className="container col-md-4 py-3" style={{ width: '25rem' }}>
        <div className="card align-items-center img--card">
        <img className="img-card" src={"ImagesCard/" + props.imagen} alt=""></img>
            <div className="card-body">
                <h2 className="card-title text-center py-1">{props.nombre} </h2>
                <p className="card-title text-center py-1">{props.descripcion}</p>
                <h4 className="card-title text-center py-1">${props.precio}</h4>
            <ItemCount stock={5} initial={1} onAdd={0}/>
        </div>
        </div>
    </div>  
    );
}

export default Item ;