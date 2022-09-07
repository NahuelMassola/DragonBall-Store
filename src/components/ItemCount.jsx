import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const [stock , setStock] = useState (props.stock)
    const [onAdd , setonAdd] = useState (props.onAdd)

    const sumar =  () => {
        if  (count < stock) {
            setCount(count +1) ;
        } 
    }

    const restar = () => {
        if (count > 1 ) {
            setCount(count -1 );
        }
    }

    const agregarProductos = () => {
        if (count <= stock ) {
        setStock (stock - count);
        setonAdd (onAdd + count);
        
    }
} ;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 d-flex ">
                    <input type="button" className="btn btn-secondary" value="-" onChange={()=>{}} onClick={restar}/>
                    <input type="text" className="form-control card--title text-center" onChange={()=>{}}  value={count}/>
                    <input type="button" className="btn btn-secondary" value="+" onChange={()=>{}} onClick={sumar}/>
                </div>
            </div>
            <div className="text-center py-3">
                    <input type="button" className="add-button text-center" value="Agregar" onChange={()=>{}} onClick={() => {agregarProductos()}} ></input>
            </div>
                <div className="card-title text-center"> <strong>Stock: {stock}</strong></div>
                <div className="card-title text-center"> <strong>Cantidad Productos Agregados: {onAdd}</strong></div>
        </div>
        
    )
}
export default ItemCount ;



<input></input>