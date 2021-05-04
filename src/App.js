import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const TopicDetail = props => {
    console.log(props)

  return(

    <div>
    <h1>topic detail page of: {props.match.params.topicId}</h1>
  </div>

  );
 
  };

const TopicsList = props => {

  return(
    <div>
    <h1>topics list</h1>

    
    <Link to={`${props.match.url}/covid19`}>Increased cases in India</Link>
    <Link to={`${props.match.url}/sars20`}>sars</Link>
    <Link to={`${props.match.url}/malaria`}>malaria</Link>
  </div>
  )
  

};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail}/>
        
      </Switch>
    </div>
  );
}

export default App;
