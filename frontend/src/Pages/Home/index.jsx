import React from 'react';
import Navbar from '../../Components/NavBar';
import logo2 from "../../Assets/logo2.png";
import img1 from "../../Assets/img1.png";
import icon1 from '../../Assets/1.png'; 
import icon2 from '../../Assets/2.png'; 
import icon3 from '../../Assets/3.png'; 
import icon4 from '../../Assets/4.png'; 
import icon5 from '../../Assets/5.png';
import Footer from '../../Components/Footer'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'left',
};

const headerContainerStyle = {
  textAlign: 'center',
};

const logoStyle = {
  width: '53%',
  height: 'auto',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
};

const logoStyle2 = {
  width: '20%',
  height: 'auto',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  marginTop: '5%',
};

const iconStyle = {
  width: '50px',
  height: 'auto',
  margin: '20px',
};

const headingStyle = {
  color: 'white',
  fontSize: '34px',
  margin: '30px 0',
  display: 'flex',
  justifyContent: 'left',
  marginLeft: '80px',
  marginTop: '0px'
};

const featureBoxStyle = {
  border: '1px solid #ddd',
  color: 'white',
  padding: '15px',
  margin: '10px',
  borderRadius: '10px',
  backgroundColor: '#090E2E',
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: 'bold',
  width: '200px',
  height: '150px', 
};

const featureBoxesContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const maindiv = {
  display: 'flex',
  justifyContent: 'center'
};

const leftContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: '48%',
};

const paragraph = {
  marginTop: '13%',
};

const buttonStyle = {
  backgroundColor: '#202650',
  border: 'none',
  color: 'white',
  padding: '15px 25px',
  borderRadius: '10px',
  marginTop: '5px',
  cursor: 'pointer',
  marginLeft: '80px',
  fontWeight: 'light-bold',
  fontSize: '18px',
  letterSpacing: '1px',
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={maindiv}>
          <div style={leftContainer}>
            <div style={headerContainerStyle}>
              <h1 style={{ ...headingStyle, fontSize: '84px', letterSpacing: '6px', margin: '30px 0', display: 'flex', alignItems: 'center' }}>
                <img
                  src={logo2}
                  alt="IntegraAllay Logo - Mock-Ready Integration Server"
                  style={{ ...logoStyle2, marginRight: '20px', marginTop: '0px', marginLeft: '80px' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '84px', marginTop: 'px', display: 'block' }}>IntegraAllay</span>
                  <span style={{ fontSize: '15px', marginTop: '60px', display: 'block', letterSpacing: '2px' }}>"Mock-Ready Integration Server: Level Up Your Testing!"</span>
                </div>
              </h1>
            </div>

            <div>
              <div style={paragraph}>
                <h3 style={headingStyle}>What is IntegraAllay?</h3>
                <p style={{ margin: '30px', color: 'white', textAlign: 'justify', marginLeft: '80px', letterSpacing: '2px', fontSize: '12px', lineHeight: '20px' }}>
                  IntegraAllay is a cutting-edge server designed to revolutionize integration testing for front-end developers. Our platform empowers developers to create mock back-end services, simulate API responses, and thoroughly test their front-end applications. In situations where the actual back-end is under development, undergoing maintenance, or simply not available for testing, IntegraAllay steps in as a reliable solution.
                </p>
                <button style={buttonStyle}>Get Started</button>
              </div>
            </div>
          </div>

          <img
            src={img1}
            alt="IntegraAllay Logo - Mock-Ready Integration Server"
            style={logoStyle}
          />
        </div>

        <h3 style={{ ...headingStyle, marginTop: '50px' }}>Key Features and Advantages</h3>

        <div style={featureBoxesContainer}>
          <div style={featureBoxStyle}>
            <img
              src={icon1}
              alt="User-Created Collections Icon"
              style={iconStyle}
            />
            <p>User-Created Collections</p>
          </div>
          <div style={featureBoxStyle}>
            <img
              src={icon2}
              alt="User-Created Collections Icon"
              style={iconStyle}
            />
            <p>Front-End Testing without a Functional Back-End</p>
          </div>
          <div style={featureBoxStyle}>
            <img
              src={icon3}
              alt="User-Created Collections Icon"
              style={iconStyle}
            />
            <p>Extensive Request Validation</p>
          </div>
          <div style={featureBoxStyle}>
            <img
              src={icon4}
              alt="User-Created Collections Icon"
              style={iconStyle}
            />
            <p>Collaborative Features</p>
          </div>
          <div style={featureBoxStyle}>
            <img
              src={icon5}
              alt="User-Created Collections Icon"
              style={iconStyle}
            />
            <p>Efficient and Confident Development</p>
          </div>
        </div>
        
      </div>
      <section className="c-contact">
      <div className="c-content">
  <div className="c-title"><h2>Contact Us</h2></div>
  <p>
    Have a question about our software? <br></br>Want to learn more about how
    IntegraAllay can streamline your development process?  <br></br>We're here to
    help! Reach out to us using the contact information below or fill
    out the form, and our team will get back to you promptly.
  </p>
</div>


        <div className="c-container">


          <div className="c-contactForm">
            <form action="">
              <h2>Send Message</h2>
              <div className="c-inputbox">
                <input type="text" name="full_name" required id="full_name" />
                <span>User Name</span>
              </div>
              <div className="c-inputbox">
                <input type="email" name="email" required id="email" />
                <span>Email</span>
              </div>
              <div className="c-inputbox">
                <textarea required id="message"></textarea>
                <span>Type your message here...</span>
              </div>
              <div className="c-inputbox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      
    </div>
  );
};

export default Home;
