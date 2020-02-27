import React from "react";
import s from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faSearch
   } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
      {/* <NavLink to="/about" activeClassName={s.logo}><img src="img/logo.png" alt="tiger paw logo" />
          Super<span>Ti</span></NavLink> */}


        <div className={s.logo}>
          <img src="img/logo.png" alt="tiger paw logo" />
          Super<span>Ti</span>
        </div>


        <div className={s.menu}>
          <NavLink to="/about" activeClassName={s.activeLink}>About</NavLink>
          <NavLink to="/loves" activeClassName={s.activeLink}>Tiger Loves</NavLink>
          <NavLink to="/hates" activeClassName={s.activeLink}>Tiger Hates</NavLink>
          <NavLink to="/social" activeClassName={s.activeLink}>Networking</NavLink>
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
