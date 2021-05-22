import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from 'navigation/router';
import Loader from 'components/Loader/loader';

const App: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader/>}>
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
    </Suspense>
  );
};

export default App;
