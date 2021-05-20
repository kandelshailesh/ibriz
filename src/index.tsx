import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import Loader from 'components/Loader';

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById('root'),
);
