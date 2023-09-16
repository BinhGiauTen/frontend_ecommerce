import React from "react";
import { Link } from "react-router-dom";
import  {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs";
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Your email address..."
                  aria-label="Your email address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 277 Near Vill chopal, <br />
                  Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a className="text-white mt-2 d-block mb-2" href="tel:+84 375926965">
                +84 375926965
                </a>
                <a className="text-white mt-2 d-block mb-2" href="mailto:binhpro50@gmail.com">
                  binhpro50@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-3 mb-2">
                    <Link to="">
                        <BsLinkedin className="text-white fs-4"/>
                    </Link>
                    <Link to="">
                        <BsInstagram className="text-white fs-4"/>
                    </Link>
                    <Link to="">
                        <BsGithub className="text-white fs-4"/>
                    </Link>
                    <Link to="">
                        <BsYoutube className="text-white fs-4"/>
                    </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column ">
                <Link to="/privacy-policy" className="text-white p-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white p-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white p-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white p-1">
                  Term & Conditions
                </Link>
                <Link to="/" className="text-white p-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white p-1">
                  Search
                </Link>
                <Link to="/" className="text-white p-1">
                  About us
                </Link>
                <Link to="/" className="text-white p-1">
                  Faq
                </Link>
                <Link to="/" className="text-white p-1">
                  Contact
                </Link>
                <Link to="/" className="text-white p-1">
                  Size Chart
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white p-1">
                  Accessories
                </Link>
                <Link to="/" className="text-white p-1">
                  Laptops
                </Link>
                <Link to="/" className="text-white p-1">
                  Headphones
                </Link>
                <Link to="/" className="text-white p-1">
                  Smart Watches
                </Link>
                <Link to="/" className="text-white p-1">
                  Tablets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
