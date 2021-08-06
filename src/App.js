import './App.css';
import React from 'react';
import { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';
import All from "./Pages/All";
import Appetizer from "./Pages/Appetizer";
import Dinner from "./Pages/Dinner";
import Salads from './Pages/Salads';
import Dessert from './Pages/Dessert';



function App() {
  return (
    <>
      <Router>
            <h1>
              Restaurant Menu
            </h1>
            <p className="HeaderBorder"></p>
            <nav>
                <ul>
                  <li>
                    <Link to ="/">All</Link>
                  </li>
                  <li>
                    <Link to ="/salads">Salads</Link>
                  </li>
                  <li>
                    <Link to ="/appetizer">Appetizer</Link>
                  </li>
                  <li>
                    <Link to ="/dinner">Dinner</Link>
                  </li>
                  <li>
                    <Link to ="/desserts">Desserts</Link>
                  </li>
                </ul>
              </nav>
           
        <div className="Container">
          <Switch >
            <Route exact path="/">
              <All/>
            </Route>
            <Route  path="/appetizer">
              <Appetizer/>
            </Route>
            <Route  path="/dinner">
              <Dinner/>
            </Route>
            <Route  path="/desserts">
              <Dessert/>
            </Route>
            <Route  path="/salads">
              <Salads/>
            </Route>
          </Switch>
        </div>
      </Router> 
    </>
  );
}

export default App;
