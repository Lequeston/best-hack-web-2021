import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';

import App from '@/App';

const app = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

const root = document.getElementById('root');

ReactDOM.render(app, root);
