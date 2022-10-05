import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        {/* 3rd social media link */}
        <div className="arange">
          <h2>Follow Us</h2>
          <ul>
            <li className="footer-list">
              <a href="#"> Facebook </a>
            </li>
            <li className="footer-list">
              <a href="#"> Instagram </a>
            </li>
            <li className="footer-list">
              <a href="#"> Youtube </a>
            </li>
          </ul>
        </div>
        <div className="main-footer2">
          <form className="form">
            <div className="Footer-design">For Subscription</div>
            <input placeholder="Enter your email" type="text"></input>
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </footer>
      <div className="footer-center">
        <hr className="line"></hr>
        <h6>All rights reserved</h6><br/>
        <h7>Copyright license</h7><br/>
        
      </div>
    </>
  );
};
export default Footer;
