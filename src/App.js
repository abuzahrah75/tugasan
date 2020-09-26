import React from 'react';
import './App.css';
// import PersonList from './Components/PersonList'
// import MyContext from "./Components/mycontext"
import Covid19 from './Components/Covid19'
import Navbar from './Components/Navbar'
import Store from './Components/Store'
import Testcomponent from './Components/testcomponent';
// import Testapi from './Components/testapi';


function App() {
  

  return (
    <div className="App">
      <Store>
        <Navbar />
        {/* <Testapi /> */}
        {/* <PersonList /> */}
        <Testcomponent />
        <Covid19 />
        
      </Store>
    </div>
  );
}

export default App;
