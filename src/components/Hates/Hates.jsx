import React from 'react';
import s from './Hates.module.css'; 


const Hates = () => {
    return(
        <div  className={s.hates}>
            <h2>Before you start networking you need to know what Tiger hates</h2>
            <ul>
                <li>Bad Geese</li>
                <li>Sleeping late</li>
                <li>The smell of bacon</li>
                <li>Stupid people</li>
            </ul>
        </div>
    )
};

export default Hates;