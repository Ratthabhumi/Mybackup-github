import React from 'react';
import '../styles/Welcome.css'; // Assuming the CSS file is inside a 'styles' folder
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome-container">
            {/* Top-right Buttons */}
            <div className="top-right-buttons">
                <Link to="/sport-center" className="right-corner-btn">KMITL Sport Center</Link>
                <Link to="/hospital" className="right-corner-btn">KMC Hospital</Link>
            </div>

            {/* Main Header */}
            <header className="main-header">
                <h1>KQue</h1>
                <p>ระบบการจองคิวอัจฉริยะสำหรับ KMC Hospital และ KMITL Sport Center</p>
            </header>

            {/* Sport Section */}
            <section className="sport-section">
                <h2>KMITL Sport Center</h2>
                <p>จองสนามกีฬา เช่น บาสเกตบอล แบดมินตัน หรือยิม ผ่านเว็บไซต์</p>
                <Link to="/login" className="login-register-btn">Login / Register</Link>
            </section>

            {/* Hospital Section */}
            <section className="hospital-section">
                <h2>KMC Hospital</h2>
                <p>ตรวจสอบเวลาทำการ ข้อมูลการติดต่อ และตำแหน่งที่ตั้ง</p>
                <Link to="/login" className="login-register-btn">Login / Register</Link>
            </section>

            {/* Footer Section */}
            <footer className="footer-section">
                <p>Open hours: Monday - Friday 09:00 - 17:00</p>
                <p>Contact: kque.support@gmail.com</p>
                <p>Address: 3 Thanon Chalong Krung, Bangkok 10520</p>
            </footer>
        </div>
    );
};

export default Welcome;
