import React from 'react';
//import './App.css';
//import Welcome from './Components/Welcome';
import Greetings from './Components/Greetings';
function App(){
  const isLoggedIn=true;
  return(
    <div className='App'>
      <Greetings isLoggedIn={isLoggedIn}/>
    </div>
  )
}
export default App;