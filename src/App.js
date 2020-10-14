import React from 'react';
import './App.css';
// import PersonList from './Components/PersonList'
// import MyContext from "./Components/mycontext"
import Covid19 from './Components/Covid19'
import Navbar from './Components/Navbar'
import Store from './Components/Store'

import Login from './Components/login'
// import Logout from './Components/logout'

import {Route, Switch} from 'react-router-dom'
import {ProtectedRoute} from './Components/protectedRoute'

import Utama from './Components/utama'
import Tobuy from './Components/tugas/tobuy';
import Todo from './Components/tugas/todo';
import Todev from './Components/tugas/todev';
// import ToAdmin from './Components/tugas/toAdmin';
import CovidMalaysia from './Components/apitest/covidMalaysia';


function App() {
  

  return (
    <div className="App">
      <Store>
        <Navbar />

        <React.StrictMode>
          <Switch>
            <Route path="/" exact component={Utama} />

            <ProtectedRoute path="/covid19" component={Covid19}/>
            <ProtectedRoute path="/covid19MY" component={CovidMalaysia}/>
            <ProtectedRoute path="/tobuy" component={Tobuy}/>
            <ProtectedRoute path="/todo" component={Todo}/>
            <ProtectedRoute path="/todev" component={Todev}/>
            {/* <ProtectedRoute path="/toAdmin" component={ToAdmin}/> */}
          


            <Route path="/login" component={Login} />
            {/* <Route path="/logout" component={Logout} /> */}
            
            <Route path="*" component={ ()=> "404 NOT FOUND"}/>
          </Switch>
        </React.StrictMode>
        
      </Store>
    </div>
  );
}

export default App;
