import React from 'react';
import { Layout as AntLayout } from 'antd';

import Header from '@/components/Header';
import Content from '@/components/Content';

import './Home.scss';
const Home: React.FC = () => {
  return (
    <AntLayout>
      <Header />
      <Content />
    </AntLayout>
  );
};

export default Home;
