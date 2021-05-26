import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats!</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1>Men's Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/hats' component={HatsPage}/>
        <Route path='/shop/mens' component={MensPage}/>
      </Switch> 
    </div>
  );
}

export default App;
