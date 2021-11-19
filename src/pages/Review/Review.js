import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { name, description , image} = props?.review
    return (
        <div className="text-center">
            <Col>
      <Card className="text- p-3 shadow-lg">
        <Card.Img variant="top" src={image} className="review-img mx-auto"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Body className="p-0">{description.slice(0, 100)}</Card.Body>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Review;