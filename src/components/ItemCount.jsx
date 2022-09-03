import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const [stock , setStock] = useState (props.stock)
    const [ add , setAdd] = useState (props.onAdd)

    const sumar =  () => {
        if  (count < props.stock) {
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
        setAdd (add + count);
        
    }
} ;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 d-flex ">
                    <input type="button" className="btn btn-secondary" value="-" onClick={restar}/>
                    <input type="text" className="form-control text-center" value={count}/>
                    <input type="button" className="btn btn-secondary" value="+" onClick={sumar}/>
                </div>
            </div>
            <div className="text-center py-3">
                    <input type="button" className="add-button text-center" value="Agregar" onChange={()=>{}} onClick={() => {agregarProductos()}} ></input>
            </div>
                <div className="text-center"> Stock: {stock}</div>
                <div className="text-center"> Cantidad Productos Agregados: {add}</div>
        </div>
        
    )
}
export default ItemCount ;



