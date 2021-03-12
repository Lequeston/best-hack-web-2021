import React from 'react';
import { Layout as AntLayout } from 'antd';

import CategoryLocation from '@/components/Category-location';
import MainCategoryList from '@components/Main-category-list';

import './Body.scss';

const AntContent = AntLayout.Content;

const Body: React.FC = () => {
  return (
    <AntContent style={{ padding: '0 50px' }}>
      <CategoryLocation />

      <AntLayout className='site-layout-background' style={{ padding: '24px 0' }}>
        <MainCategoryList />
      </AntLayout>
    </AntContent>
  );
};

export default Body;
