import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Hero></Hero>
      <MenuBar></MenuBar>
      <Switch>

      </Switch>
    </Router >
  );
}

export default App;
