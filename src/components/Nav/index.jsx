import React from 'react';


// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import About from '../About';
import Home from '../Home';

import Styles from './styles';


const Nav = () => {

  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
           
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
      <Route exact path ="/">
                 <Home/>
            </Route>
            <Route exact path ="/about">
               <About/>
            </Route>
      </Switch>
    </Router>
  );
}

export default Nav;