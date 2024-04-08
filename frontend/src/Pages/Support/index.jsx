import React from 'react';
import Navbar from '../../Components/NavBar';
import './index.css';
import image1 from '../../Assets/q.jpg';
import image2 from '../../Assets/x.jpg';
import image3 from '../../Assets/y.jpg';
import image4 from '../../Assets/z.jpg';
const Support = () => {

  const iconStyle = {
    width: '60%', // Adjust the width as needed
    height: 'auto',
    margin: '30px',
    border: '1px solid #ccc', // Add border style
    borderRadius: '5px',
    backgroundColor: '#f2f2f2', // Add background color
  };
  

  return (
    <div>
      <Navbar />
      <div className="container">
        
        <ol>
        
        <ul>
              <li>
                Server up your frontend in port 4000
              </li>
              <li>
                You can create your own workspace once you log in 
                <img src={image1} alt="User-Created Collections Icon" style={iconStyle} />
              </li>
              <li>
                In your workspace, create collection 
                <img src={image2} alt="User-Created Collections Icon" style={iconStyle} />
              </li>
              <li>
                Put request and response how do you like it to have
                <img src={image3} alt="User-Created Collections Icon" style={iconStyle} />
              </li>
              <li>
                Responses will go to your frontend and frontend will work 
                <img src={image4} alt="User-Created Collections Icon" style={iconStyle} />
              </li>
            </ul>
  

        </ol>
      </div>

    </div>
  );
}

export default Support;
