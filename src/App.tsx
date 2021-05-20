import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from 'navigation/router';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
};

export default App;
