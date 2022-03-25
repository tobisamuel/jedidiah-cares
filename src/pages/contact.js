import React from "react";
import { FaEnvelope, FaFacebook, FaPhone, FaTwitter } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import Layout from "../components/layout";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Layout pageTitle="Jedidiah Cares | Contact Us">
      <div className="contact">
        <div className="contact-banner">
          <h2>CONTACT US</h2>
        </div>
        <div className="container">
          <div className="contact-main">
            <h2>
              Jedidiah Cares Global Outreach for Women, Youth and Children
            </h2>

            <div className="contact-links">
              <div className="contact-item">
                <TiLocation className="icon" />
                <p>
                  No 2, Ebere Ubesie Street, Indepenent Layout, Enugu State,
                  Nigeria.
                </p>
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
