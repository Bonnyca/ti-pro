import React from "react";
import s from "./Social.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope,
  faPhone
 } from "@fortawesome/free-solid-svg-icons";

const Social = () => {
  return (
    <div className={s.social}>
      <div className={s.soicons}>
        <a
          href="https://www.youtube.com/watch?v=FK3dav4bA4s"
          className={s.icon}
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a href="https://www.facebook.com/anton.prasolov" className={s.icon}>
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a href="https://twitter.com/antonprasolov" className={s.icon}>
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>

        <a
          href="https://www.linkedin.com/in/anton-prasolov-bb906749/"
          className={s.icon}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>

        <a
          href="https://www.pinterest.com/search/pins/?q=tiger&rs=typed&term_meta[]=tiger%7Ctyped"
          className={s.icon}
        >
          <FontAwesomeIcon icon={faPinterestP} size="lg" />
        </a>
      </div>
      <div className={s.contacts}> 
      <div className={s.email}> <FontAwesomeIcon icon={faEnvelope} style={{ color: 'darkcyan' }}/> tiger@google.com</div>
      <div className={s.phone}> <FontAwesomeIcon icon={faPhone} spin style={{ color: 'darkcyan' }}/> 1650-537-5079</div>
        
      </div>
    </div>
  );
};

export default Social;
