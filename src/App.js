import React from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage/HomePage';
import { createContext } from 'react';

function App() {
  return (
    // <Provider store={store}>
    //   <NavBar />
    //   <HomePage />
    // </Provider>
    <>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
