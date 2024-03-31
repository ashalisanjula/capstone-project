import React from "react";
import Navbar from "../../Components/NavBar";
import "./index.css";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <section class="contact">
        <div class="content">
          <h2>Contact Us</h2>

          <p>
            Have a question about our software? Want to learn more about how
            InterAllGray can streamline your development process? We're here to
            help! Reach out to us using the contact information below or fill
            out the form, and our team will get back to you promptly.
          </p>
        </div>
        <div class="container">
          <div class="contactInfo">
            <div class="box">
              <div class="icon"></div>
              <div class="text">
                <h3>Address</h3>
                <p>Sabaragamuwa university of SriLanka</p>
              </div>
            </div>

            <div class="box">
              <div class="icon">
                {/*  icon wenuwata 4to  */}
                <i class="fas fa-envelope"></i>
              </div>
              <div class="text">
                <h3>Email</h3>
                <p>chamikalakshitha935@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="contactForm">
            <form action="">
              <h2>Send Message</h2>
              <div class="inputbox">
                <input type="text" name="" required="required" id="full_name" />
                <span>User Name</span>
              </div>
              <div class="inputbox">
                <input type="text" name="" required="required" id="email" />
                <span>Email</span>
              </div>
              <div class="inputbox">
                <textarea required="required" id="message"></textarea>
                <span>Type your message here...</span>
              </div>
              <div class="inputbox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
