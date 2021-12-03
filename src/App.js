import React from 'react';
import './App.scss';
import MainNavbar from './components/Navbar';
// import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Photos from './components/pages/Photos';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router>
      <MainNavbar />
      <Switch>
        <Route path='/photo-album/' exact component={Photos} />
        <Route path='/photo-album/about' component={About} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
