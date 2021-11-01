import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialWork from './components/pages/SocialWork';
import RoadMap from './components/pages/RoadMap';
import ConnectWallet from './components/pages/ConnectWallet';
import Home from './components/pages/Home';
import Footer from './components/Footer';

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
      </Switch>
   
    </Router>  
    </>
  )
}

export default App;
