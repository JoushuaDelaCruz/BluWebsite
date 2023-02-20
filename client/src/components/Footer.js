import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const getYear = () => {
    let today = new Date();
    return today.getFullYear();
  };
  /* Still need to do the discord! */
  return (
    <footer className="footer">
      <section className="footer-body">
        <a
          href="https://www.instagram.com/dcblu_creator/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size="2.25rem" />
        </a>
        <a
          href="https://www.facebook.com/dcblu"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size="2.25rem" />
        </a>
        <a
          href="https://twitter.com/dcblu_creator"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size="2.25rem" />
        </a>
        <a href="*">
          <FaDiscord size="2.25rem" />
        </a>
      </section>
      <p className="footer-copyright">
        DC Blu &copy; {getYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
