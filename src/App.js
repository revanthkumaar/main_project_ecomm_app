import React from 'react';
//ROUTING DEPENDENCEIES 
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

//THESE ARE THE PAGES IN THIS APP
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
