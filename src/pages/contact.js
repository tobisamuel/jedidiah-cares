import React from "react";
import { FaEnvelope, FaFacebook, FaPhone, FaTwitter } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import Layout from "../components/layout";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Layout pageTitle="Jedidiah Cares | Contact Us">
      <div className="contact">
        <div className="contact-banner">
          <h2>Contact Us </h2>
        </div>
        <div className="container">
          <div className="contact-main">
            <h2>
              Jedidiah Cares Global Outreach for Women, Youth and Children
            </h2>

            <div className="contact-links">
              <div className="contact-item">
                <GrLocation className="icon" />
                <p>123 fnnvnvnvn road, Nigeria</p>
              </div>

              <div className="contact-item">
                <FaPhone className="icon" />
                <p>+234 123 456 789</p>
              </div>

              <div className="contact-item">
                <FaEnvelope className="icon" />
                <p>jedidahcares@gmail.com</p>
              </div>
            </div>
          </div>
          <h2>Stay Connected</h2>
          <div className="contact-social">
            <a href="https://www.facebook.com/jedidiahcares/">
              <FaFacebook />
            </a>
            <a href="">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;