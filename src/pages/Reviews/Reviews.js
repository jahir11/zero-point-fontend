import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://serene-headland-52528.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="my-5 p-5">
            <div className="mb-5">
            <h3 className="text-center p-2">Reviews</h3>
            <h1 className="fw-bold mx-2 mt-4 text-center">Client Says</h1>

            </div>
            <Row xs={1} md={3} className="g-4">
            {
                reviews.map(review => <Review key={review._id} review={review}/>)
            }
            </Row>
        </div>
        </div>
    );
};

export default Reviews;