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
        contacts
      </div>
    </div>
  );
};

export default Social;
