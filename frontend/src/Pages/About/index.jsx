import React from 'react';
import Navbar from '../../Components/NavBar';
import './index.css';

const About = () => {



  return (
    <div>
      <Navbar />

      <div className="title-section">
        <h2 className="title">Meet the IntegraAllay Team</h2>
        <p>We are a dedicated group of second-year undergraduates embarking on an exciting journey with our capstone project, IntegraAllay. Our team is passionate about reshaping the landscape of front-end integration testing, driven by a collective vision to empower developers with innovative tools.
As students at Sabaragamuwa University, we bring a fresh perspective and enthusiasm to the field of software development. IntegraAllay is not just a capstone project for us; it's a commitment to excellence and a testament to our dedication to the craft.
Currently, in our second year, we recognize the challenges faced by front-end developers in dealing with integration testing and aim to provide effective solutions through our platform. Our collaborative efforts have laid the foundation for a unique approach to integration testing, with a focus on user-centric design and seamless solutions.
We see this capstone project as a stepping stone for future endeavors. As we continue to develop and refine IntegraAllay, our aspirations extend beyond the academic realm. We envision a more official and refined version of our platform, contributing meaningfully to the world of front-end development.
Together, we look forward to a future where IntegraAllay becomes an integral part of the developer's toolkit.

</p>
      </div>



      <div className="vision-section">
        <h3 className="title">Our Vision</h3>
        <p>
          As a team, we share a common vision to empower front-end developers with tools that enhance their testing capabilities, irrespective of the challenges posed by back-end dependencies. We believe in fostering a collaborative and dynamic environment that fuels creativity, innovation, and a relentless pursuit of excellence.
        </p>
      </div>

      <div className="commitment-section">
        <h3 className="title">Our Commitment</h3>
        <p>
          At IntegraAllay, we are committed to transparency, innovation, and customer satisfaction. Our team collaborates seamlessly to deliver features that cater to the evolving needs of front-end developers. We believe in continuous improvement, and your feedback is invaluable in shaping the future of our platform.
        </p>
      </div>

      <div className="join-us-section">
        <div>
          <h3 className="title">Join Us on the Journey</h3>
          <p>
            Curious about the faces behind IntegraAllay? Connect with us on social media, follow our blog, and stay updated on the latest developments. We're excited to have you join us on this journey of revolutionizing front-end integration testing.
          </p>
        </div>

    </div>
    </div>
  );
};

export default About;
