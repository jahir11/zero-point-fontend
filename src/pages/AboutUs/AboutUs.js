import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/about-bg.jpg'
import './About.css'
const AboutUs = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={6} className=" d-flex justify-content-center align-items-center">
                    <div>
                    <h3>WELCOME!</h3>
                    <h1  className="fw-bold ">ABOUT OUR STORE</h1>
                    <p className="p-1 text-black-50">For 25 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind.</p>
                    <Link to="/login">
                    <Button className="btn btn-dark text-white">Log in</Button>
                    </Link>
                    </div>
                </Col>
                <Col sm={12} md={6} className="bg-white mt-5">
                  <img src={aboutImg} alt="" className="img-fluid about-bg" />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;