import * as React from "react";
import Layout from "../components/layout";
import "../styles/about.css";
import logo from "../images/logo.jpg";
import compassion from "../images/compassion.svg";
import empowerment from "../images/empowerment.svg";
import excellence from "../images/excellence.svg";
import integrity from "../images/integrity.svg";
import respect from "../images/respect.svg";
import service from "../images/service.svg";

const AboutPage = () => {
  return (
    <Layout pageTitle="Jedidiah Cares | About">
      <section id="about">
        <div className="about-banner">
          <h2>ABOUT US</h2>
        </div>

        <div className="container">
          {/* <div className="about-us">
            <div className="about-text">
              <h2>WHO WE ARE</h2>
              <p></p>
            </div>
          </div> */}

          <div className="vision">
            <div className="text">
              <h2>WHO WE ARE</h2>
              <p>
                Jedidiah Cares Global Outreach for Women, Youth and Children is
                a non-profit organization whose purpose is based on the
                recognition of the needs, aspirations, problems and challenges
                faced by women and children in Nigeria and the world at large.
                Jedidiah Cares Global Outreach for Women, Youth and Children in
                collaboration with other stakeholders seek to provide a happy
                and safe community where women and children can realize their
                full potential and be major contributors to society.
              </p>
            </div>
          </div>
          <div className="vision">
            <div className="text">
              <h2>OUR VISION</h2>
              <p>
                A world where every woman, child and youth is safe and given the
                opportunity to realize their full potential of becoming
                productive and dignified members of society
              </p>
            </div>
          </div>
          <div className="vision">
            <div className="text">
              <h2>OUR MISSION</h2>
              <p>
                Support women, children and youth by advocating for their rights
                and provide them with psychosocial support in order for them to
                live in safety and dignity in our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="values">
        <div className="values container">
          <h2>OUR VALUES</h2>
          <div className="values-wrapper">
            <div className="values-card">
              <div className="img">
                <img src={compassion} alt="" />
              </div>
              <h4>Compassion</h4>
            </div>
            <div className="values-card">
              <div className="img">
                <img src={respect} alt="" />
              </div>
              <h4>Respect</h4>
            </div>
            <div className="values-card">
              <div className="img">
                <img src={empowerment} alt="" />
              </div>
              <h4>Empowerment</h4>
            </div>
            <div className="values-card">
              <div className="img">
                <img src={service} alt="" />
              </div>
              <h4>Service</h4>
            </div>
            <div className="values-card">
              <div className="img">
                <img src={integrity} alt="" />
              </div>
              <h4>Integrity</h4>
            </div>
            <div className="values-card">
              <div className="img">
                <img src={excellence} alt="" />
              </div>
              <h4>Excellence</h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
