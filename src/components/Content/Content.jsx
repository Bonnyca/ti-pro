
import React from 'react';
import s from './Content.module.css'; 



const Content = () => {
    return (
    <div className={s.content}>
     <p className={s.firstp}>World's first React website</p>  
      <p className={s.secondp}>dedicated to the  </p>
      <p className={s.thirdp}>Tiger's greatness!</p>
     </div>
    )
};

export default Content;