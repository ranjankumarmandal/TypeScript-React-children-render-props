import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';
import HomeContainer from './components/containers/HomeContainer';

function App() {
  return (
    <BrowserRouter>
      <HomeContainer>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/about' component={AboutScreen} />
        </Switch>
      </HomeContainer>
    </BrowserRouter>
  );
}

export default App;
