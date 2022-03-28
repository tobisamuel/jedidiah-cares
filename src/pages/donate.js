import React from "react";
import Layout from "../components/layout";
import "../styles/donate.css";

const Donate = () => {
  return (
    <Layout pageTitle="Jedidiah Cares | Donate">
      <div className="donate-banner">
        <h2>Donate</h2>
      </div>
      <div className="donate container">
        <div className="donate-text">
          <h2>Support Our Cause</h2>
          <p>
            Jedidiah cares is committed to a society where every woman and child
            is given the opportunity to realize their full potential of becoming
            productive and dignified members of society. By donating to Jedidiah
            cares, we can empower more women to become self-reliant and
            productive members of society; reduce out-of-school children and
            position the youth for employability and productivity. Support
            Jedidiah Cares today and empower a woman, youth and child and to
            become all they are meant to be!
          </p>
          <p>
            To donate, please contact us at +234 704 000 1344 or send an email
            to jedidiahcares@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
