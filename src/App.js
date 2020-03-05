import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header/Header';
import Social from './components/Social/Social';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Networking from './components/Networking/Networking'
import { Route, BrowserRouter } from 'react-router-dom'
import Loves from './components/Loves/Loves';
import Hates from './components/Hates/Hates';
import state from './redux/state';



library.add(fab, faCheckSquare, faTwitter, faCoffee)

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Social />
        <Header />
        <div className="content-wrapper">
          <Route path='/about' component={Content} />
          <Route path='/hates'component={Hates} />

          <Route path='/loves'
          render={ () => <Loves
            lovesData={props.state.lovesData} />}/>
          
          <Route path='/social'component={Networking} />
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
