import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomeScreen} />
        <Route path='/about' component={AboutScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
