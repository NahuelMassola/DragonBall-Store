import React from "react";
import { Row , Col } from "react-bootstrap";
import "./Footer.css" ;

// Componente Footer //
const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="container text-center">
                <Row>
                    <Col md={4} xs={4}>React-Bootstrap Design</Col>
                    <Col md={4} xs={4}>All rights reserved</Col>
                    <Col md={4} xs={4}>Developed by Nahuel Dellacecca | Github</Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer;