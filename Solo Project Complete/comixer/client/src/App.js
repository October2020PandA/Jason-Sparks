import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Login from './components/LoginForm';
import Register from './components/RegisterForm';
import Main from './views/Main';
import Category from './views/Category';
import Details from './views/Details';
import MyContext from './context/MyContext';

function App() {
  return (
    <div className="App">
      <div className="container-fluid h-100 p-0">
        <MyContext.Provider value={"context value"}>
        <Router className="h-100">
          <Login path="/login"/>
          <Register path="/register"/>
          <Main path="/main"/>
          <Category path="/category/:id"/>
          <Details path="/details/:id"/>
        </Router>
        </MyContext.Provider>
      </div>
    </div>
  );
}

export default App;