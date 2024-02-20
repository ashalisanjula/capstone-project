import React from 'react';
import img1 from "../../Assets/img1.png"
import icon1 from '../../Assets/1.png'; 
import icon2 from '../../Assets/2.png'; 
import icon3 from '../../Assets/3.png'; 
import icon4 from '../../Assets/4.png'; 
import icon5 from '../../Assets/5.png'; // Rename the imported icon file
import Navbar from '../../Components/NavBar';

// Move styling constants outside the component
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
  width: '400px',
  height: 'auto',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  marginTop: '5px',
};

const iconStyle = {
  width: '50px',
  height: 'auto',
  margin:'20px',
};

const headingStyle = {
  color: 'white',
  fontSize: '44px',
  margin: '30px 0',
  textAlign: 'center',
};

const featureBoxStyle = {
  border: '1px solid #ddd',
  color: '#6D6D71',
  padding: '15px',
  margin: '10px',
  borderRadius: '10px',
  backgroundColor:'#090E2E',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 'bold',
  width: '200px', // Adjusted width
  height: '150px', // Adjusted height
};

const featureBoxesContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const Home = () => {
  return (
    <div>
      <Navbar />
    <div style={containerStyle}>
      <div style={headerContainerStyle}>
        <h1 style={{ color: 'white', fontSize: '84px', letterSpacing: '6px', margin: 30 }}>IntegraAllay</h1>
        <p style={{ margin: 30, color: '#D8D7E0' }}>Mock-Ready Integration Server: Level Up Your Testing!</p>
      </div>

      <img
        src={img1}
        alt="IntegraAllay Logo - Mock-Ready Integration Server"
        style={logoStyle}
      />

      <h3 style={headingStyle}>What is IntegraAllay?</h3>
      <p style={{ margin: '30px', color: '#6D6D71', textAlign: 'center' }}>
        IntegraAllay is a cutting-edge server designed to revolutionize integration testing for front-end developers. <br />
        Our platform empowers developers to create mock back-end services, simulate API responses, <br />
        and thoroughly test their front-end applications. <br />
        In situations where the actual back-end is under development, undergoing maintenance, or simply not available for testing, <br />
        IntegraAllay steps in as a reliable solution.
      </p>

      <h3 style={headingStyle}>Key Features and Advantages</h3>

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
      <h3 style={headingStyle}>Contact Us</h3>

    </div>
    </div>
  );
};

export default Home;