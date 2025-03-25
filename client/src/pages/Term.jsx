import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginStyles.css';

const Term = () => {
  return (
    <div className="login-page">
      <div className="blurred-background"></div>
      <div className="content-wrapper">
        <div className="logo-container">
          <Link className="logo" to="/welcome" aria-label="Go to Welcome page"></Link>
          <Link className="logo2" to="/welcome" aria-label="Go to Welcome page"></Link>
        </div>
        <div className="main-container">
          <div className="left-section">
            <h2>Terms and Conditions</h2>
            <p>Welcome to Kqueue, a queue management system for KMC Hospital and KMITL Sport Center. By registering or using our services, you agree to the following Terms & Conditions:</p>
            <ul>
              <li>Users must provide accurate and complete information during registration.</li>
              <li>Users are responsible for maintaining the confidentiality of their account information.</li>
              <li>Users must comply with all applicable laws and regulations while using our services.</li>
              <li>We reserve the right to suspend or terminate accounts that violate our terms and conditions.</li>
              <li>We are not responsible for any loss or damage resulting from the use of our services.</li>
              <li>We reserve the right to modify these terms and conditions at any time.</li>
            </ul>
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or registering on Kqueue, you agree to comply with these Terms. If you do not agree, please do not use our services.</p>
            <h3>2. User Accounts & Responsibilities</h3>
            <ul>
              <li>You must provide accurate and complete information during registration.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Any unauthorized access or suspicious activity should be reported immediately.</li>
            </ul>
            <h3>3. Use of Services</h3>
            <ul>
              <li>For KMITL Clinic: Users can book medical appointments, check schedules, and view staff details.</li>
              <li>For KMITL Sport Center: Users can reserve sports facilities and view activity schedules.</li>
              <li>Misuse of the system, such as booking fake appointments, is strictly prohibited.</li>
            </ul>
            <h3>4. Appointment & Cancellation Policy</h3>
            <ul>
              <li>Users should book, reschedule, or cancel appointments responsibly.</li>
              <li>Repeated no-shows may lead to temporary account restrictions.</li>
            </ul>
            <h3>5. Privacy & Data Protection</h3>
            <ul>
              <li>We collect necessary personal information for service operations.</li>
              <li>Your data will not be shared with third parties except as required by law.</li>
              <li>Review our Privacy Policy for more details.</li>
            </ul>
            <h3>6. Prohibited Activities</h3>
            <p>Users must not:</p>
            <ul>
              <li>Provide false information or impersonate others.</li>
              <li>Interfere with the platform’s functionality or attempt unauthorized access.</li>
              <li>Use Kqueue for any illegal or harmful purposes.</li>
            </ul>
            <h3>7. Account Suspension & Termination</h3>
            <ul>
              <li>Violation of these Terms may result in temporary or permanent account suspension.</li>
              <li>Kqueue reserves the right to suspend accounts engaging in misconduct.</li>
            </ul>
            <h3>8. Limitation of Liability</h3>
            <ul>
              <li>Kqueue is provided on an “as-is” basis; we do not guarantee uninterrupted service.</li>
              <li>We are not responsible for appointment outcomes or delays in service.</li>
            </ul>
            <h3>9. Changes to Terms</h3>
            <p>We may update these Terms periodically. Continued use of Kqueue signifies acceptance of any changes.</p>
            <h3>10. Contact Information</h3>
            <p>For questions, contact us at support@kqueue.com.</p>
            <Link to="/login" className="back-to-login">Back to Login</Link>
          </div>
          <div className="right-section">
            <div className="welcome-message">
              Welcome to Kqueue, a queue management system for KMC Hospital and KMITL Sport Center. By
              registering or using our services, you agree to the following Terms & Conditions.
            </div>
            <div className="open-hour">
              <div className="info-row">
                <div className="info-header">
                  <div className="icon-container">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h3>Open hour</h3>
                </div>
                <div className="info-content">
                  <p>Monday to Friday: 08:00 a.m. - 18:00 p.m.</p>
                  <p>Saturday to Sunday: 09:00 a.m. - 12:00 p.m.</p>
                  <p>Public Holiday: 08:30 a.m. - 17:00 p.m.</p>
                </div>
              </div>
              <div className="contacts">
                <div className="info-row">
                  <div className="info-header">
                    <div className="icon-container">
                      <i className="fas fa-user"></i>
                    </div>
                    <h3>Contacts</h3>
                  </div>
                  <div className="info-content">
                    <p><i className="fab fa-facebook"></i> ศูนย์การแพทย์ สจล. KMITL Medical Center</p>
                    <p><i className="fas fa-globe"></i> <a href="https://kmchf-pp.org" target="_blank" rel="noopener noreferrer">https://kmchf-pp.org</a></p>
                    <p><i className="fas fa-phone"></i> 02 329 8143, 02 329 8000 - 3633</p>
                  </div>
                </div>
                <div className="location">
                  <div className="info-row">
                    <div className="info-header">
                      <div className="icon-container">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <h3>Location</h3>
                    </div>
                    <div className="info-content">
                      <p><span>Address:</span> 3 Thanon Chalong Krung, Lam Prathew, Lat Krabang, Bangkok 10520</p>
                      <p><span>Located at:</span>King Mongkut's Institute of<br />Technology Ladkrabang</p>
                    </div>
                  </div>
                </div>
                <div className="flexible-line">
                  kque.support@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;