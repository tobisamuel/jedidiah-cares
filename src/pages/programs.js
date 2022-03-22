import { Link } from "gatsby";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/layout";
import Banner from "../images/banner.jpg";
import "../styles/programs.css";

const Programs = () => {
  return (
    <Layout pageTitle="Jedidiah Cares | Programs">
      <div className="main-banner">
        <h2>OUR PROGRAMS</h2>
      </div>
      <div className="programs container">
        <div className="program grid">
          <div className="program-img">
            <img src={Banner} alt="" />
          </div>
          <div className="program-text spacing-s">
            <h3>Skills Acquisition and Life Skills Training for Rural Women</h3>
            <p>
              We organize livelihood training, provide skill development and
              seed capital for rural and disadvantaged Women to help them
              undertake enterprising activites
            </p>
            <Link to="/" className="program-btn">
              <p>Learn More</p>
              <FaArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <div className="program grid">
          <div className="program-img">
            <img src={Banner} alt="" />
          </div>
          <div className="program-text spacing-s">
            <h3>Shelter for Abused Women and Children</h3>
            <p>
              Intimate Partner Violence (IPV) is a serious, pervasive social
              problem with devastating physical, psychological and economic
              consqeuences for victims. With the alarming rate of IPV in
              Nigeria, there is a need for more interventions especially in
              rural communities where awareness is low. Jedidiah Cares provides
              temporary shelter and psychosocial support for abused women and
              children for extreme situations while offering practical and
              peaceful solutions to victims.
            </p>
            <Link to="/" className="program-btn">
              <p>Learn More</p>
              <FaArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <div className="program grid">
          <div className="program-img">
            <img src={Banner} alt="" />
          </div>
          <div className="program-text spacing-s">
            <h3>Policy Advocacy</h3>
            <p>
              Our advocacy program seeks to influence government policies on
              closing the gender gap and ending all forms of discrimination
              against Women and Children in Nigeria. We do this through
              formulating policy briefs targeted at policy makers, organizing
              and participating in topical discussions, conferences and
              workshops on Women's and Children's rights.
            </p>
            <Link to="/" className="program-btn">
              <p>Learn More</p>
              <FaArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <div className="program grid">
          <div className="program-img">
            <img src={Banner} alt="" />
          </div>
          <div className="program-text spacing-s">
            <h3>Right from Wrong Club</h3>
            <p>
              This is an in-school activity geared towards promoting core
              ethical values or virtues in primary and secondary pupils and
              students respectively. Through this program, Children between the
              ages of 6 and 16 will be taught values and virtues such as
              Responsibility, Honesty, Empathy, Compassion etc.
            </p>
            <Link to="/" className="program-btn">
              <p>Learn More</p>
              <FaArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <div className="program grid">
          <div className="program-img">
            <img src={Banner} alt="" />
          </div>
          <div className="program-text spacing-s">
            <h3>Life-Skills and Employability</h3>
            <p>
              The life skills and employability training for young Nigerians
              between the age of 18 and 25 addresses the mismatch of skills
              between young people's skills and labor market requirements.
              Beneficiaries are trained on personal competencies and soft skills
              to enhance their transition to the labor force; oral and written
              communication, professionalism, analytical, problem solving and
              critical thinking skills, team work, resume and cover letter
              writing, job seeking strategies and interviewing techniques,
              career mentoring and counseling to equip them with labor market
              opportunities, up-to-date information and targeted advice on
              relevant certifications in various fields to enhance their
              employability.
            </p>
            <Link to="/" className="program-btn">
              <p>Learn More</p>
              <FaArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <div className="program grid">
          <div className="program-img">
            <img src={Banner} alt="" />
          </div>
          <div className="program-text spacing-s">
            <h3>Research</h3>
            <p>
              Jedidiah Cares is committed to continuous research on Women and
              Children's Rights and wellbeing, policy advocacy for gender
              equality and youth leadership and employability. This research
              serves as the basis for its innovative curriculum and programs.
            </p>
            <Link to="/" className="program-btn">
              <p>Learn More</p>
              <FaArrowRight className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Programs;
