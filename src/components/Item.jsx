import React from "react";
/* import ItemCount from "./ItemCount" */

const Item = (props) => {
    return (
            <div className="card align-items-center img--card ">
                <img className="img-card" src={"ImagesCard/" + props.imagen} alt=""></img>
                <div className="row text-center">
                    <div >
                        <h2 className="card-title py-1">{props.nombre} </h2>
                    </div>
                    <div className="text-center d-flex justify-content-evenly ">
                        <button className="box-button text-center my-4">${props.precio}</button>
                        <button className="box-button text-center my-4">Detalles</button>
                    </div>
             {/* <ItemCount stock={5} initial={1} onAdd={0}/>  */}
                </div>
            </div> 
    );
}

export default Item ;