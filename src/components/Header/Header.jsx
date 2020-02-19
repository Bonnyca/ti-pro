import React from 'react';
import s from './Header.module.css'; 


const Header = () => {
    return (
    <header className={s.header}>
        <img src='img/logo.png' alt="tiger paw logo"/>
        <span>about Tiger</span>
        <span>Tiger loves</span>
        <span>Tiger hates</span>
        
    </header>
    )
}

export default Header;
