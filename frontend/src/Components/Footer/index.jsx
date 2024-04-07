import React from "react";
import "./index.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../Assets/logo1.png";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/support",
    display: "Support",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const quick_links2 = [
  {
    path: "/recent_workplaces",
    display: "Workplaces",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="footerRow">
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
              IntegraAllay is a cutting-edge server designed to revolutionize integration testing for front-end developers. 
              </p>

              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Discover</h5>

            <ListGroup className="footer_quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Quick Links</h5>

            <ListGroup className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Contact</h5>

            <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="details">
                  <span>
                    <i className="ri-map-pin-fill"></i>
                  </span>
                  Address:
                </h6>

                <p className="details">Belihuloya, Balangoda</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="details">
                  <span>
                  <i className="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>

                <p className="details">info@integrally.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="details">
                  <span>
                  <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className="details">+941122565</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          </div>
          <Col lg='12' className="text-center pt-5">
            <p className="copyright">Copyrights {year} All rights reserved</p>
          </Col>
      </div>
    </footer>
  );
};

export default Footer;