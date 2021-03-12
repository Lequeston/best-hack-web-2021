import React from 'react';
import { Layout as AntLayout } from 'antd';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <AntLayout>
      <Header />
      <Body />
      <Footer />
    </AntLayout>
  );
};

export default Home;
