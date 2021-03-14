import React, { useEffect, useState } from 'react';
import { Layout as AntLayout } from 'antd';

import Header from '@/components/Header';
import CategoryLocation from '@/components/CategoryLocation';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

import './Home.scss';

const Home: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [categoryLocationHeight, setCategoryLocationHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [bodyHeightOffset, setBodyHeightOffset] = useState(0);

  useEffect(() => {
    setBodyHeightOffset(headerHeight + categoryLocationHeight + footerHeight);
  }, [headerHeight, categoryLocationHeight, footerHeight]);

  return (
    <AntLayout>
      <Header setHeight={setHeaderHeight} />
      <CategoryLocation setHeight={setCategoryLocationHeight} />
      <Body heightOffset={bodyHeightOffset} />
      <Footer setHeight={setFooterHeight} />
    </AntLayout>
  );
};

export default Home;
