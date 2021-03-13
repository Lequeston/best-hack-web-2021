import React from 'react';

import { Button, Result } from 'antd';

import { useHistory } from 'react-router-dom';

import { routesMap, HOME_PATH } from '@/routers';

export const NoMatch: React.FC = () => {
  const history = useHistory();
  return (
    <Result
      status='404'
      title='404'
      subTitle='Извините, посещенная вами страница не существует.'
      extra={
        <Button type='primary' onClick={() => history.push(routesMap[HOME_PATH])}>
          Вернуться на домашнюю страницу
        </Button>
      }
    />
  );
};
