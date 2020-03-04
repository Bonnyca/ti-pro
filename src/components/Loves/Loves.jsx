import React from "react";
import s from "./Loves.module.css";


function Card(props) {
    return(
        <div className={s.card}>
            <p> {props.title} </p>
            <img src={props.img} alt={props.img}/>
        </div>
    )
};


const Loves = (props) => {
  
    let lovesData = [
    { id: 1, title: "His Lenusencheg", img: "https://i0.wp.com/www.frankaslothouber.nl/wp-content/uploads/2019/01/41-emperor-penguin-chick-portrait.jpg?ssl=1" },
    { id: 2, title: "Secret coffee", img: "https://i.pinimg.com/564x/0f/4e/f8/0f4ef8a11d5c0274050d9bcfe860f947.jpg" },
    { id: 3, title: "Guarding the hryundel", img: "https://i.pinimg.com/564x/0f/74/70/0f74707cee565a30887a137f4bbe4922.jpg" },
    { id: 4, title: "Geese, who know their place", img: "https://i.pinimg.com/564x/cb/cf/d0/cbcfd0f39a5564ea4bafe203f854d557.jpg" },
    { id: 5, title: "To look awesome", img: "https://i.pinimg.com/564x/4b/5f/74/4b5f74e480df42618a16e872897cfc08.jpg" },
    { id: 6, title: "Sandwiche for a lunch", img: "https://i.pinimg.com/564x/67/3a/4e/673a4e12ec851271ac63bd3f541124ee.jpg" },
    { id: 7, title: "LosoSoup", img: "https://i.pinimg.com/originals/01/b2/6c/01b26c7a3305926e172f423937c65030.gif" },
];

  
  let LovesItems = lovesData.map ( l => <Card title={l.title} id={l.id} img={l.img}/> );

  return (
    <div className={s.loves}>
      <h2>Before you start networking you need to know what <span>Tiger loves</span></h2>

      <div className={s.lovesCards}>
        { LovesItems }
      </div>
    </div>
  );
};

export default Loves;
