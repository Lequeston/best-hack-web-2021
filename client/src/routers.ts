import React from 'react';

export const HOME_PATH = 'HOME_PATH';

export const routesMap = new Map([
  [
    HOME_PATH,
    {
      path: '/',
      page: React.lazy(() => import('@/views/Home'))
    }
  ]
]);

const getRoutesArray = () => {
  const res = [];
  routesMap.forEach((value) => {
    res.push(value);
  });
  return res;
};

export const routesArray = getRoutesArray();
