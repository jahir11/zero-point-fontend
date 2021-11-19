import { FaArrowRight ,FaFacebook,FaGoogle,FaInstagram} from "react-icons/fa";
import React from 'react';
import { Col, Container, Form, Row , Button} from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-dark">
            <Container className="text-white mt-5 py-5">
                <row className="d-lg-flex">
                    <Col lg={4} md={4} sm={12} className="me-5 nav-brand">
                    <strong className="fs-3 p-1">Zero Point</strong>
                    <p className="text-white-50 my-2"><small>Subscribe for access to exclusive offers and all the latest news</small></p>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Control type="text" placeholder="Your Email"/>
                        <Button className="px-5 btn-primary"><FaArrowRight/></Button>
                    </Form.Group>
                    <hr className="m-2"/>
                    <div className="fs-3 text-center">
                        <span className="m-2"><FaFacebook/></span>
                        <span className="m-2"><FaGoogle/></span>
                        <span className="m-2"><FaInstagram/></span>
                    </div>
                    <hr />
                    </Col>
                    <Col lg={8} md={8} sm={12}>
                        <Row>
                        <Col lg={3} md={6} sm={12} >
                          <h4 className="text-white-50"> Services</h4>
                          <p>24hr online support</p>
                          <p>First servicing</p>
                          <p>Original Parts</p>
                          <p>5Year free service</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                          <h4 className="text-white-50">Pages</h4>
                          <p>Home</p>
                          <p>Product</p>
                          <p>login</p>
                          <p>Register</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} >
                          <h4 className="text-white-50">Contact</h4>
                          <p>Phone: +880 1815558898</p>
                          <p>Mail: zero.point@gmail.com</p>
                          <p>Mail: zero.point.bd@gmail.com</p>
                    </Col>
                        </Row>

                    </Col>
                    
                </row>

            </Container>
        </div>
    );
};

export default Footer;