import React from "react";
import s from"./Social.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Social = () => {
  return (
    <div className={s.social}>
      <p> social</p>
      <FontAwesomeIcon icon="coffee" />
    </div>
  );
};

export default Social;
