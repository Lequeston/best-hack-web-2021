import React from 'react';

import { Space, Spin } from 'antd';

import './Loading.scss';

export const Loading: React.FC = () => {
  return (
    <Space align='center' className='loading-container' size='large'>
      <Spin tip='Загрузка...' />
    </Space>
  );
};
