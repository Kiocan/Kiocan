import React from 'react';
import './App.css';
import Registration from './components/Registration';
import *as userData from './mockData/users.json';

function App() {
  const [appRendered, setAppRendered] = React.useState(false)
  if (!appRendered)
    if(!localStorage.getItem("Lab_6")){
      localStorage.setItem("Lab_6",JSON.stringify(userData))
      setAppRendered(true)
    }
    
  return (
    <div className="App">
      <div className="outer">
        
        <Registration/>
        
        </div>
    </div>
  );
}

export default App;
