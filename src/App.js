import React from 'react';
import './App.css';
// import PersonList from './Components/PersonList'
// import MyContext from "./Components/mycontext"
import Covid19 from './Components/Covid19'
import Navbar from './Components/Navbar'
import Store from './Components/Store'


function App() {

  return (
    <div className="App">
      <Store>
        <Navbar />
        {/* <PersonList /> */}
        <Covid19 />
      </Store>
    </div>
  );
}

export default App;
