import React from "react";
import s from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faSearch
   } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src="img/logo.png" alt="tiger paw logo" />
          Super<span>Ti</span>
        </div>
        <div className={s.menu}>
          <span>About</span>
          <span>Tiger Loves</span>
          <span>Tiger Hates</span>
        </div>
        <div className="request">
        <FontAwesomeIcon icon={faSearch} size="sm" style={{ color: '#C0C0C0', cursor: 'pointer', marginRight: '7px'}} />
        <button className={s.quote}> Get a Cuddle Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
