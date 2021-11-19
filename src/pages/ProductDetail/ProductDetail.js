import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row , Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
 
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    
    const {image, country_name, description, price, title} = product

    // order purchase form
    const {user} = useAuth()
    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
      fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
        if(result.insertedId){
          alert('Order processed Successfully')
          reset()
        }
      })
    };
    return (
        <Container>
            <Row xs={1} md={2} className="g-5 mt-4">
                <Col>
                <h2>Product Detail</h2>
                <Card className="text- p-3 shadow-lg">
                    <Card.Img variant="top" src={image} className="product-img"/>
                    <Card.Body>
                    <Card.Title className="bg-dark text-light px-2 rounded-3 d-inline">{country_name}</Card.Title>
                    <Card.Title><h6>{title}</h6></Card.Title>
                    <Card.Body className="p-0">{description}</Card.Body>
                    <Card.Title className="p-0 my-2">{price}</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <h2>Your info</h2>
                    <Form onSubmit={handleSubmit(onSubmit)} className="m-5 info-form mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicPlaceName">
                        <Form.Control type="text" {...register("title")} placeholder="product name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" {...register("name")} placeholder="name" value={user?.displayName} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" {...register("email")} placeholder="email" value={user?.email} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control type="number" {...register("number")} placeholder="contact number" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Control type="text" {...register("city")} placeholder="city" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control type="text" {...register("country_name")}
                        placeholder="country name" 
                        required/>
                    </Form.Group>
                    <Button variant="dark" type="submit" className="w-100" >
                            Order Now
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;