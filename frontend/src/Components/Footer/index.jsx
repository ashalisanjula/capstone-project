import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>IntegraAllay</p>
      </div>

      {/* section */}
      <div className="sec">
        <div className="left1">
          <ul>
            <li>
              {" "}
              <h3>Product</h3>
            </li>
            <li>what is integraally</li>
            <li>workspace</li>
            <li>support center</li>
          </ul>
        </div>

        <div className="left2">
          <ul>
            <li>
              {" "}
              <h3>Company</h3>
            </li>
            <li>contact us</li>
            <li>about</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>

        <div className="footer-social-icon">
          <ul>
            <li>
              <img src={twitter_logo} alt="" /> twitter
            </li>
            <br />
            <li>
              <img src={linkedin_logo} alt="" /> linkedin
            </li>
            <br />
            <li>
              <img src={github_logo} alt="" /> github
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copy Right @ 2024 -All Right</p>
      </div>
    </div>
  );
};

export default Footer;
