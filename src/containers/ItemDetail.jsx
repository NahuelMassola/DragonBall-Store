import React from "react";
import ItemCount from "../components/ItemCount";

//Componente Detalle del Producto //
const ItemDetail = ({item})=> {

    return (
        <div className="container d-flex justify-content-center py-5">
            <div className="row outer">
                <div className="col-md-6 col-12 text-center">
                    <img className="img--cardetail" src={"/ImagesCard/" + item.imagen} alt={item.nombre} />
                </div>
                <div className="col-md-6 col-12">
                    <div className="row">
                        <h2 className="card-detail text-center pt-5"><strong>{item.nombre} Figure</strong></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-12 text-center">
                        <p>{item.descripcion}</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <h3>${item.precio}</h3>
                    </div>
                    <ItemCount stock={5} initial={1} onAdd={0} />
                </div>
            </div>
            
        </div>
        
)
}        

export default ItemDetail ;


