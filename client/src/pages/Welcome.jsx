import React, { useState } from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom';
import Hospital5 from "../images/Hospital5.jpg";
import Hospital3 from '../images/Hospital3.jpg';
import Hospital4 from '../images/Hospital4.jpg';


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Welcome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        Hospital5,Hospital3,Hospital4
    ];

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="welcome-container">
            <header>
                <Link
                    className="logowelcome"
                    to="/welcome"
                    aria-label="Go to Welcome page"
                    onClick={scrollToTop}
                ></Link>
            </header>

            <main>
                <section className="feature-sections">
                    <div className="sport-section">
                        <div className="section-images">
                        <div className="sport-image4" aria-hidden="true"></div>
                        </div>
                        <div className="section-content">
                        <div className="kque-logo" aria-hidden="true"></div>
                        <p>Queue management system for KMC Hospital, allowing users to book, track, and manage appointments efficiently to reduce waiting times and get notified when it's your turn.</p>
                        </div>
                    </div>
                    <div className="sport-section">
                        <div className="section-images">
                        <div className="slider-container">
                        <button className="arrow left-arrow" onClick={goToPrevSlide}>
                            &#8249;
                        </button>
                        <div
                            className="slider-wrapper"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="slider-image"
                                />
                            ))}
                        </div>
                        <button className="arrow right-arrow" onClick={goToNextSlide}>
                            &#8250;
                        </button>
                    </div>
                        </div>
                        <div className="section-content">
                            <h2>Book your spot in the KMC Hospital queue effortlessly through our website! Skip the long waits and manage your appointment with ease. With just a few clicks, secure your place and receive timely updates. Click below to create an account and queue with us.</h2>
                            <Link to="/login" className="login-register-btn">Login / Register</Link>
                        </div>
                    </div>

                    <div className="hospital-section">
                        <div className="hospital-image" aria-hidden="true"></div>
                        <div className="info-boxes">

                            <div className="info-box">
                                <div className="icon-circle">
                                    <span className="icon-clock" aria-hidden="true"><h3>Open Hours</h3></span>
                                </div>
                                <p>Monday to Friday and holiday<br />
                                (09:00 am - 05:00 pm)<br />
                                Saturday to Sunday<br />
                                (09:00 am - 11:00 pm)</p>
                            </div>
                            <div className="info-box">
                                <div className="icon-circle">
                                    <span className="icon-contact" aria-hidden="true"><h3>Contacts</h3></span>
                                </div>
                                
                                <p><i className="fab fa-facebook"></i> ศูนย์การแพทย์ สจล. KMITL Medical center</p>
                                <p><i className="fas fa-globe"></i>  <a href="https://kmchf-pp.org" target="_blank" rel="noopener noreferrer">https://kmchf-pp.org</a></p>
                                <p><i className="fas fa-phone"></i> Tel: 02-3298145, 02 329 8000 - 9633</p>

                            </div>
                            <div className="info-box">
                                <div className="icon-circle">
                                    <span className="icon-location" aria-hidden="true"><h3>Location</h3></span>
                                </div>

                                <p>Address: 3 Thanon Chalong Krung,<br />
                                Lat Krabang, Bangkok 10520<br />
                                Located at: King Mongkut's Institute of Technology Ladkrabang</p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer-section">
                <p>Contact us: <a href="mailto:kque.support@gmail.com">kque.support@gmail.com</a></p>
            </footer>
        </div>
    );
};


export default Welcome;
