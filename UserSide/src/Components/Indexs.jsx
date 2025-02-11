import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa'; // Import paw icon


const Indexs = () => {
    return (
        <div>
            <IndexHeader />
            {/* Hero Section */}
            <section id="hero" className="bg-light text-center py-5 mt-2">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                     <h2 className="custom-heading">
        <FaPaw className="paw-icon" />Welcome to WoofTale
      </h2>
                    <p className="lead">Your trusted partner in pet health and care.</p>
                </motion.div>
                <div className="mt-2">
                    <Link to={'/shopr'} className="btn btn-danger mx-2">Shop Registration</Link>
                    <Link to={'/docs'} className="btn btn-primary mx-2">Doctor Registration</Link>
                    <Link to={'/userreg'} className="btn btn-secondary mx-2">User Registration</Link>
                </div>
            </section>

            {/* Auto-Scrolling Images Section */}
            <section className="carousel-section py-5 mb-5 ">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/adorable-portrait-pet-surrounded-by-flowers_23-2151850064.jpg?t=st=1738038043~exp=1738041643~hmac=028f1e6753e47bdad12697ee5c41fd5962e346665f8fcf91c83042d78d96097e&w=1060"
                            alt="Pet Care 1"
                        />
                        <Carousel.Caption>
                            <h3>Professional Pet Care</h3>
                            <p>Ensuring your pet's health and happiness.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/adorable-portrait-pet-surrounded-by-flowers_23-2151850082.jpg?t=st=1738038063~exp=1738041663~hmac=9affc6dbb74d1ace4f5141a87ba66fd22bb868121c9c9f8dee89d0346b45a720&w=1060"
                            alt="Pet Care 2"
                        />
                        <Carousel.Caption>
                            <h3>Expert Veterinary Services</h3>
                            <p>24/7 support for your furry friends.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/3d-illustration-showcasing-friendship-cats-dogs_23-2151483335.jpg?t=st=1738038081~exp=1738041681~hmac=cff6587b8b8e0d1e4ab31da4b956e88361bcc244703ba7495b34ad5885d3a12f&w=740"
                            alt="Pet Care 3"
                        />
                        <Carousel.Caption>
                            <h3>Comprehensive Pet Solutions</h3>
                            <p>We care like it's our own.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* About Section */}
            <section id="about" className="py-5 bg-light">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>About Us</h2>
                        <p>
                            PetCare is dedicated to providing top-notch healthcare services for pets. Our mission is to make pet ownership easier and more joyful by ensuring pets receive the best care available.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5 bg-dark text-light">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Contact Us</h2>
                        <p>Email: contact@petcare.com | Phone: +123-456-7890</p>
                        <address>123 Pet Street, Petville, PA 45678</address>
                    </motion.div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-secondary text-light py-3 text-center">
                <p>&copy; 2025 PetCare. All rights reserved.</p>
            </footer>
        </div>
    );
}


export default Indexs