import React from 'react';
import Login from './components/auth/login/login.component.js';
import Register from './components/auth/register/register.component.js';
import Profile from './components/profile/profile.component.js';
import { Container } from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Register/>
        <Login/>
        <Profile/>
      </Container>
    </div>
  );
}

export default App;
