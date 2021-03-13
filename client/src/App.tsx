import React, { Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.scss';

import { routesArray } from './routers';

import Loading from './views/Loading';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routesArray.map(({ path, page }) => (
          <Route exact key={path} path={path} component={page} />
        ))}

        <Route path='*' component={React.lazy(() => import('./views/404'))} />
      </Switch>
    </Suspense>
  );
};

export default App;
