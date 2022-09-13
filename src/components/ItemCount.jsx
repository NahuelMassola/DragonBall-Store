import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

// Componente Contador //

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const [stock , setStock] = useState (props.stock)
    const [onAdd , setonAdd] = useState (props.onAdd)

    // funcion sumar contador // 
    const sumar =  () => {
        if  (count < stock) {
            setCount(count +1) ;
        } else {
            Swal.fire(
                'No puede exceder el Stock disponible!',
                'Precione Ok para volver!',
                'error'
            )
        }
    }

    // funcion restar contador //
    const restar = () => {
        if (count > 1 ) {
            setCount(count -1 );
        } else {
            Swal.fire(
                'Agregue 1 Producto!',
                'Precione Ok para volver!',
                'error'
            )
        }
    }

    // funcion Agregar Productos //
    const agregarProductos = () => {
        if (stock===0) {
            Swal.fire(
                'Stock Insuficiente!',
                'Precione Ok para volver!',
                'error'
            )
            setCount(0);
        }
        else if  (count <= stock ) {
            setStock (stock - count);
            setonAdd (onAdd + count);
            Swal.fire(
                'Agregaste un Producto!',
                '',
                'success'
            )
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
                <div className="text-center"> <strong>Stock: {stock}</strong></div>
                <div className="text-center pb-5"> <strong>Cantidad Productos Agregados: {onAdd}</strong></div>
        </div>
    )
}

export default ItemCount;