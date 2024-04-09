import React from "react";
import Navbar from "../../Components/NavBar";
import "./index.css";
import Footer from "../../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <section className="c-contact">
        <div className="c-content">
          <div className="c-title">
            <h2>Contact Us</h2>
          </div>
          <p>
            Have a question about our software? <br></br>Want to learn more
            about how IntegraAllay can streamline your development process?{" "}
            <br></br>We're here to help! Reach out to us using the contact
            information below or fill out the form, and our team will get back
            to you promptly.
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

export default Contact;
