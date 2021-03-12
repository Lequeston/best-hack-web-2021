import React from 'react';
import { Layout as AntLayout } from 'antd';

import Header from '../../components/Header';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <AntLayout>
      <Header />
    </AntLayout>
  );
};

export default Home;
