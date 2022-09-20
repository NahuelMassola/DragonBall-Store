import React, { useState } from "react";
import { useContext } from "react" ;
import ItemCount from "../components/ItemCount";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoBagHandle, IoBagRemove } from "react-icons/io5";

//Componente Detalle del Producto //

const ItemDetail = ({item})=> {
    const [CartHandler , setCartHandler ] = useState(false)
    const {addItem , removeItem } = useContext(CartContext);
    
    
    const onAdd = (quantityToAdd) => {
        setCartHandler(true);
        Swal.fire(
            'Agregaste un Producto!!',
            '',
            'success'
        )
        addItem(item, quantityToAdd);
    }

    // funcion borrar item si ya esta agregado // 
    const deleteItem = () => {
        removeItem(item.id) 
        setCartHandler(false) 
    }

    return (
        <>
        <Container className="d-flex justify-content-center py-5">
            <Row className=" outer">
                <Col md={6} sm={12} className="text-center">
                    <img className="img--cardetail" src={"/ImagesCard/" + item.imagen} alt={item.nombre} />
                </Col>
                <Col md={6} sm={12}>
                    <Row>
                        <h2 className="card-detail text-center pt-5"><strong>{item.nombre} Figure</strong></h2>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} className="text-center">
                        <p>{item.descripcion}</p>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <h3>${item.precio}</h3>
                    </Row>
                    <div className="text-center"> <strong>Stock: {item.stock}</strong></div>
                    { 
                        CartHandler ? 
                        (<>
                        <Row>
                            <Col md={7} lg={7} xs={12} className="d-flex justify-content-center my-3"><button className="box-button" onClick={deleteItem}><IoBagRemove size={20}/>DELETE FROM CART</button></Col>
                            <Col md={4} lg={4} xs={12} className="d-flex justify-content-center my-3">
                                <Link to={`/cart`}><button className="box-button"><IoBagHandle size={20}/> TERMINAR COMPRA</button></Link>
                            </Col>
                        </Row>
                        </>
                        ) 
                        : (<ItemCount key={item.id} stock={item.stock} initial={1} onAdd={onAdd} />) 
                        }
                    
                </Col>
            </Row> 
        </Container>
        </>
        )
}        

export default ItemDetail ;


