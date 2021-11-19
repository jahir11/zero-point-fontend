import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'


const Product = (props) => {
    const {_id,image,title,country_name, description , price} = props?.product
    return (
        <div>
             <Col>
      <Card className="text- p-3 shadow-lg">
        <Card.Img variant="top" src={image} className="product-img"/>
        <Card.Body>
          <Card.Title className="bg-dark text-light px-2 rounded-3 d-inline">{country_name}</Card.Title>
          <Card.Title><h6>{title}</h6></Card.Title>
          <Card.Body className="p-0">{description}</Card.Body>
          <Card.Title className="p-0 my-2">${price}</Card.Title>

          <Link className="text-warning fw-bold text-center" to={`/product/${_id}`}>Purchase</Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Product;