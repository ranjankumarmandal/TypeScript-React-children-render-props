import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomeScreen} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
