import React from "react";
import { Link } from "react-router-dom";

// Componente Item //

const Item = ({id, nombre , precio, imagen }) => {
    return (
            <div className="card align-items-center img--card ">
                <Link to={"/item/" + id}><img className="img-card" src={"/ImagesCard/" + imagen} alt=""></img></Link>
                <div className="row text-center">
                    <div >
                        <h2 className="card-title py-1">{nombre} </h2>
                    </div>
                    <Link to={"/item/" + id} className="link text-center d-flex justify-content-evenly ">
                        <button className="box-button text-center my-4">${precio}</button>
                        <button className="box-button text-center my-4">Detalles</button>
                    </Link>
                </div>
            </div> 
    );
}

export default Item ;