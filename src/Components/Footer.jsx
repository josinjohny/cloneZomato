import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <>
      <footer className="mt-4 bg-light p-4">
        <div className="text-center">
          <img
            className="mb-3"
            style={{ height: 30 }}
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="Zomato Logo"
          />
        </div>
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-2 mb-4">
              <h5>ABOUT ZOMATO</h5>
              <ul className="list-unstyled">
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Work With Us</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
                <li>Press Kit</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="col-12 col-md-2 mb-4">
              <h5>ZOMAVERSE</h5>
              <ul className="list-unstyled">
                <li>Zomato</li>
                <li>Blinkit</li>
                <li>Inshorts</li>
                <li>Feeding India</li>
                <li>Hyperpure</li>
                <li>Zomato Live</li>
                <li>Zomaland</li>
                <li>Weather Union</li>
              </ul>
            </div>

            <div className="col-12 col-md-2 mb-4">
              <h5>FOR RESTAURANTS</h5>
              <ul className="list-unstyled">
                <li>Partner With Us</li>
                <li>Apps For You</li>
              </ul>
            </div>

            <div className="col-12 col-md-2 mb-4">
              <h5>LEARN MORE</h5>
              <ul className="list-unstyled">
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
              </ul>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <h5>SOCIAL LINKS</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-2 mb-3">
                <button className="btn btn-outline-secondary rounded-circle">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button className="btn btn-outline-secondary rounded-circle">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className="btn btn-outline-secondary rounded-circle">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="btn btn-outline-secondary rounded-circle">
                  <FontAwesomeIcon icon={faYoutube} />
                </button>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#">
                  <img
                    className="store-logo"
                    src="https://w7.pngwing.com/pngs/327/888/png-transparent-aivalable-on-the-app-store-hd-logo.png"
                    alt="App Store"
                    style={{ height: 40 }}
                  />
                </a>
                <a href="#">
                  <img
                    className="store-logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEy8HTVhe6kewSa_-x4TerF5isgiP1-DByQ&s"
                    alt="Google Play"
                    style={{ height: 40 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-muted">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. © 2008-2024 Zomato Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
