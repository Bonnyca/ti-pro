import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header/Header';
import Social from './components/Social/Social';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

library.add(fab, faCheckSquare, faTwitter, faCoffee)

function App() {
  return (

    <div className="app-wrapper">
      <Social />
      <Header />
      <Content />
      <Footer />
      {/* <Sidebar /> */}

      
      
    </div>
  );
}

export default App;
