import { Row , Col, Container } from "react-bootstrap";
import "./Success.css"


const Success = () => {
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
                    <form action="" className="form">
                        <input className="form-control" type="text" placeholder="Name"/>
                        <input className="form-control" type="text" placeholder="Last Name"/>
                        <input className="form-control" type="text" placeholder="Email"/>
                        <input className="form-control" type="text" placeholder="Phone"/>
                    </form>
                </Col>
                <Col md={3} sm={3}></Col>
            </Row>
        </Container>
    )
}

export default Success;