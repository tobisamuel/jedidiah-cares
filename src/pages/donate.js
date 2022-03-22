import React from "react";
import Layout from "../components/layout";
import "../styles/donate.css";

const Donate = () => {
  return (
    <Layout pageTitle="Jedidiah Cares | Donate">
      <div className="donate-banner">
        <h2>Donate</h2>
      </div>
      <div className="contact container grid">
        <div className="contact-text">
          <h2>Donate</h2>
          <p>Want to donate to us?</p>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
