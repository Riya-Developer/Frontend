import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All right reserved by nawukri.com</div>
      <div>
        <Link to={""} target="_self">
          <FaYoutube />
        </Link>
        <Link to={""} target="_self">
          <FaFacebookF />
        </Link>
        <Link to={"*"} target="_self">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
