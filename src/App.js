import React from 'react'
import './App.css';
import Body from './Body';
import Header from './Header';
import Sidebar from './Sidebar';


const App = () => {
  return (
    
    <div className="app">
     <Header />
     <div className="app__main">
     <Sidebar/>
     <Body/>
   
     </div>
    </div>
  )
}

export default App
