import { addDoc, collection, doc, getDoc, getFirestore, serverTimestamp, updateDoc  } from "firebase/firestore";
import { useContext, useState } from "react";
import { Row , Col, Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import "./Form.css"
import { IoBagHandle } from "react-icons/io5";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Form = () => {
    const [ nombre , setNombre ] = useState('');
    const [ apellido , setApellido ] = useState('');
    const [ telefono , setTelefono ] = useState('');
    const [ email , setEmail ] = useState('');  
    const {  cartItems , totalCost , clear } = useContext(CartContext); 
    const db = getFirestore();

    const handleNombre = (e) => setNombre(e.target.value);
    const handleApellido = (e) => setApellido(e.target.value);
    const handleTelefono = (e) => setTelefono(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    // confirmacion de compra //
    const confirmCheckout = (e) => { e.preventDefault();
        const order = {
            buyer: { nombre , apellido , telefono , email },
            items: cartItems,
            date: serverTimestamp(),
            total: totalCost(),
        } ;

        const userOrder = collection( db , "Orders" );
        addDoc( userOrder , order).then((res) => {
            swal({
                title: 'Purchase done!',
                text: `
                Your Order ID: ${res.id}\n
                Name: ${nombre} ${apellido}
                Phone: ${telefono}
                Email: ${email}
                Total: $${totalCost()}`,
                icon: 'success'
                })
        })
        .then(
            cartItems.forEach( element => {
                const PurchasedQuantity = element.quantity
                const updateCollection = doc( db,"items", `${element.id}`)
                getDoc(updateCollection)
                .then( res => {
                    const updatedStock = res.data().stock - PurchasedQuantity
                    updateDoc(updateCollection, {"stock": updatedStock})
                }
                )
            }                  
        )
    )
        clear();
    }

    if (cartItems.length === 0) {
        return (
            <Container className="vh-100">
                <Row className="d-flex justify-content-center">
                    <Col md={12} sm={12} className="titulo-cart" >
                        <h1>NO ITEMS IN CART</h1> 
                    </Col>
                    <Link className="text-center" to={"/"}>
                        <button className="box-button mt-3">GO SHOPPING</button>
                    </Link>
                </Row>
            </Container>
        )} else {
    return (
        <Container className="vh-100">
            <Row>
                <Col md={12} sm={12}> 
                    <h1 className="titulo-checkout text-center mb-5">CHECKOUT</h1>
                </Col>
                <h2 className="text-center mb-3">Complete your information</h2>
            </Row>
            <Row>
                <Col md={3} sm={3}></Col>
                <Col md={6} sm={6}>
                    <form action="" className="form" onSubmit={confirmCheckout}>
                        <input className="form-control" required type="text" value={nombre} placeholder="Name" onChange={handleNombre}/>
                        <input className="form-control" required type="text" value={apellido} placeholder="Last Name" onChange={handleApellido}/>
                        <input className="form-control" required type="text" value={email} placeholder="Email" onChange={handleEmail}/>
                        <input className="form-control" required dftype="number" value={telefono} placeholder="Phone" onChange={handleTelefono}/>
                        <Col className="d-flex justify-content-center my-4">
                            <button className="box-button ">
                            <h3 className="text-cyan"><IoBagHandle size={20}/>Checkout</h3></button>
                        </Col>
                    </form>
                </Col>
                <Col md={3} sm={3}></Col>
            </Row>
        </Container>
    )
} }

export default Form;