import React from 'react';
import { Typography } from 'antd';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';

import './App.scss';

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
