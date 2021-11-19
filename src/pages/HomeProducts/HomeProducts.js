import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const HomeProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://serene-headland-52528.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="my-5 p-5">
            <div className="mb-5">
            <h3 className="text-white p-2 bg-dark d-inline" >Accessories</h3>
            <h1 className="fw-bold mx-2 mt-4">OUR LATEST PRODUCTS AND PRICE</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
            {
                products.slice(0,6).map(product => <Product key={product._id} product={product}/>)
            }
            </Row>
        </div>
    );
};

export default HomeProducts;