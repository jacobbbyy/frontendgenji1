import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialWork from './components/pages/SocialWork';
import RoadMap from './components/pages/RoadMap';
import ConnectWallet from './components/pages/ConnectWallet';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import GenjiMerch from './components/pages/GenjiMerch';
import Tnc from './components/pages/Tnc';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/socialwork' component={SocialWork} />
          <Route path='/roadmap' component={RoadMap} />
          <Route path='/connectwallet' component={ConnectWallet} />
          <Route path='/genjimerch' component={GenjiMerch}/>
          <Route path='/tnc' component={Tnc}/>
      </Switch>
   
    </Router>  
    </>
  )
}

export default App;
