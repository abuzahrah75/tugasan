import React from 'react';
import './App.css';
// import PersonList from './Components/PersonList'
import Covid19 from './Components/Covid19'
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <PersonList /> */}
      <Covid19 />
     
    </div>
  );
}

export default App;
