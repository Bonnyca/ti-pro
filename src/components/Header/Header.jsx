import React from 'react';
import s from './Header.module.css'; 


const Header = () => {
    return (
    <header className={s.header}>
        <img src='img/logo.png' alt="tiger paw logo"/>
        <span>Tiger</span>
        <span className="motto">World's first React.js website dedicated to the Tiger's greatness!
       </span> 
    </header>
    )
}

export default Header;
