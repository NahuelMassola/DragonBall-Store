import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css"
import {MdRemoveShoppingCart} from "react-icons/md"
import {IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

const Cart = () => {

    

    const { cartItems , removeItem , clear , cartTotal , totalCost } = useContext(CartContext);
    

    if (cartItems.length === 0 ) {
    return (
        <Container className="vh-100">
            <Row className="d-flex justify-content-center">
                <Col md={12} sm={12} className="titulo-cart" >
                    <h1>NO ITEMS IN CART</h1> 
                </Col>
                <Link className="text-center" to={"/"}><button className="box-button mt-3">GO SHOPPING</button></Link>
            </Row>
        </Container>
    )} else {
        return (
            <Container>
                <Row>
                    <Col md={12} lg={12}>
                        <h1 className="titulo-cart">CART</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            cartItems.map(item => (
                                <Row key={item.id} className="text-center">
                                    <Col md={2} xs={6}>
                                        <button className="box-button mt-3" onClick={ ()=> removeItem(item.id) }><MdRemoveShoppingCart size={20} color="black"/></button>
                                    </Col>
                                    <Col md={2} xs={6} className=" justify-content-end justify-content-md-center">
                                        <img src={"/ImagesCard/" + item.imagen} className="cart-item--img" alt="" />
                                    </Col>
                                    <Col md={8} xs={12} className="d-flex align-items-center">
                                        <Col md={6} xs={6}>
                                            <h4>{item.quantity} x {item.nombre} Action Figure</h4>
                                        </Col>
                                        <Col md={3} xs={4}>
                                            {/* <button className='box-button' onClick={restar}><IoRemoveCircleOutline size={20}/></button>
                                            <button className='box-button' onClick={sumar}><IoAddCircleOutline size={20}/></button> */}
                                        </Col>
                                        <Col md={3} xs={2} className="d-flex">
                                            <h4>$ {item.precio}</h4>
                                        </Col>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={4} xs={4} className="text-center"><button className="cart-item--remove box-button text-dark" onClick={ ()=> clear() }><MdRemoveShoppingCart color="black" size={20}/> All</button> </Col>
                    <Col md={4} xs={4} className="text-center">
                        <h3 className="total-cart">Products: x {cartTotal()}</h3>
                    </Col>
                    <Col md={4} xs={4}>
                        <h3 className="total-cart d-flex justify-content-center">Total: $ {totalCost()}</h3>
                    </Col>
                </Row>
                <Row className="text-center my-5">
                    <Col md={6} xs={12}>
                        <Link to={"/"}><button className="box-button text-dark"><strong>GO SHOPPING</strong></button></Link>
                    </Col>
                    <Col md={6} xs={12}>
                    <Link to=""><button className="box-button text-dark"><strong>CHECKOUT</strong></button></Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Cart;