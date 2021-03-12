import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import App from '@/App';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = document.getElementById('root');

ReactDOM.render(app, root);
