import React from 'react';
import './App.scss';
import MainNavbar from './components/Navbar';
// import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FirstBook from './components/pages/FirstBook';
import SecondBook from './components/pages/SecondBook';
import ThirdBook from './components/pages/ThirdBook';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <MainNavbar />
      <Switch>
        <Route path='/' exact component={FirstBook} />
        <Route path='/firstbook' exact component={FirstBook} />
        <Route path='/secondbook' component={SecondBook} />
        <Route path='/thirdbook' component={ThirdBook} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
