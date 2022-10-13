import { collection, serverTimestamp, addDoc, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Contact.css"

// Componente Contact //
const Contact = () => {
    const [ nombre , setNombre ] = useState('');
    const [ mensaje , setMensaje ] = useState('');
    const [ telefono , setTelefono ] = useState('');
    const [ email , setEmail ] = useState(''); 
    const db = getFirestore(); 

    const handleNombre = (e) => setNombre(e.target.value);
    const handleTelefono = (e) => setTelefono(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleMensaje = (e) => setMensaje(e.target.value);

    const clearDatos = () => {   
        setMensaje('');
        setEmail('');
        setNombre('');
        setTelefono('');
    }

    const confirmCheckout = (e) => { e.preventDefault();
        const order = {
            buyer: { nombre , mensaje , telefono , email },
            date: serverTimestamp(),
        } ;

    const userMensaje = collection( db , 'Mensaje') ;
        addDoc ( userMensaje , order ).then((res) => {
            swal({
                title: 'Message Send!',
                icon: 'success'
                })
        })

        clearDatos();

    }

    return (
        <Container>
            <Row>
                <Col md={6} sm={6}>
                    <h3 className="text-center mt-3">LOCATION BY GOOGLE</h3>
                    <img className="img-map" src="./ImagesCard/Maps.png" alt="iamgen mapa"></img>
                    <Col className="d-flex justify-content-center my-3">
                        <Link to={"/"}><button className="box-button"><strong>GO SHOPPING</strong></button></Link>
                    </Col>
                </Col>
                <Col md={6} sm={6}>
                <Col className="text-center mt-3 mb-3"><h3>LEAVE US YOUR MESSAGE</h3></Col>
                    <form action="" className="form" onSubmit={confirmCheckout}>
                        <input className="form-control text-center mt-3" required type="text" value={nombre} placeholder="Name" onChange={handleNombre}/>
                        <input className="form-control text-center mt-3" required type="text" value={email} placeholder="Email" onChange={handleEmail}/>
                        <input className="form-control text-center mt-3" required dftype="number" value={telefono} placeholder="Phone" onChange={handleTelefono}/>
                        <input className="form--control text-center" required dftype="text" value={mensaje} placeholder="Message" onChange={handleMensaje}/>
                        <Col className="btn-send">
                            <button className="box-button ">
                            <span className="text-cyan">Send Message</span></button>
                        </Col>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;