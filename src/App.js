import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header/Header';
import Social from './components/Social/Social';

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (

    <div className="app-wrapper">
      <Social />
      <Header />
      

      <div className="sidebar">
        <p>about Tiger</p>
        <p>Tiger loves</p>
        <p>Tiger hates</p>



      </div>
      <div className="main">
        main
     </div>

    </div>
  );
}

export default App;
