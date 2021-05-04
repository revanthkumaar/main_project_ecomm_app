import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = props => {

  console.log(props);


  return(
    <div className='homepage'>
    <button onClick = { ()=> props.history.push('/topics')}> TOPICS </button>
    <Directory />
  </div>

  )
 
};

export default HomePage;


