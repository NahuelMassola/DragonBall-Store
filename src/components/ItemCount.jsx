import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import {Row, Col, Container} from "react-bootstrap"
import {IoAddCircleOutline, IoRemoveCircleOutline, IoBagAdd,} from "react-icons/io5"


// Componente Contador //

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const [stock , setStock] = useState (props.stock)


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
            Swal.fire(
                'Agregaste un Producto!',
                '',
                'success'
            )
        }
    } ;

    return (
            <Container>
                <Row className='card-detail-button d-flex justify-content-center pt-5'>
                    <Col xs={12} className="d-flex justify-content-center">
                        <button className='box-button' onClick={agregarProductos}><IoBagAdd size={20}/> ADD TO CART</button>
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center mt-2">                       <button className='box-button' onClick={restar}><IoRemoveCircleOutline size={20}/></button>
                        <button className='box-button'>{count}</button>
                        <button className='box-button' onClick={sumar}><IoAddCircleOutline size={20}/></button>
                    </Col>
                </Row>
            </Container>
    )
}

export default ItemCount;