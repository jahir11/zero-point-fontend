import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import './Home.css'
const Home = () => {
    return (
        <>
        <div>
            <div className="d-flex justify-content-left align-items-center home-bg text-white">
                <div className="mx-5 m-2">
                <h2 className="mb-5 bg-sm-dark">
                THE BEST CAR PARTS DEALER</h2>
                <h6 className=" d-inline heading text-center mx-auto">
                We offer high quality vehicles at unbelievable
                <br />
                prices & creates pleasant buying experience.</h6>
                <br />
                <NavLink to='/login'>
                    <Button className="btn btn-outline-light btn-dark mt-5">Log in</Button>
                </NavLink>
                </div>
            </div>
            <Products/>
            <AboutUs/>
            <Reviews/>
        </div>
        </>
    );
};

export default Home;