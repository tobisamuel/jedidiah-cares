import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.jpg";
import "../styles/landing.css";

const LandingPage = () => {
  return (
    <React.Fragment>
      <section className="banner">
        <div className="container spacing">
          <p>CATCHY LINE</p>
          <Link to="/about" className="btn">
            Learn More
          </Link>
        </div>
      </section>

      <section className="welcome">
        <div className="container grid">
          <div className="welcome-text spacing-sm">
            <h2>Who We Are</h2>
            <p>
              Jedidiah Cares Global Outreach for Women, Youth and Children is a
              non-profit organization whose purpose is based on the recognition
              of the needs, aspirations, problems and challenges faced by women
              and children in Nigeria and the world at large.
            </p>
            <Link to="/about" className="btn">
              Learn More
            </Link>
          </div>
          <div className="welcome-img">
            <img src={logo} alt="" />
          </div>
        </div>
      </section>

      <section className="welcome">
        <div className="container grid">
          <div className="welcome-text spacing-sm">
            <h2>What We Do</h2>
            <p>
              We seek to provide a happy and safe community where women and
              children can realize their full potential and be major
              contributors to society. We do this by providing psychosocial
              support to abused women and children; vocational skills for rural
              and disadvantaged women; advocating for legislation against all
              forms of gender based violence.
            </p>
            <Link to="/programs" className="btn">
              Learn More
            </Link>
          </div>
          <div className="welcome-img">
            <img src={logo} alt="" />
          </div>
        </div>
      </section>

      <section id="quote">
        <div className="quote container">
          <h4>
            "No country can ever truly flourish if it stifles the potential of
            its women
            <br />
            and deprives itself of the contributions of half of its citizens"
            <br />- Michelle Obama
          </h4>
          <Link to="/donate" className="btn">
            Support Us
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LandingPage;
