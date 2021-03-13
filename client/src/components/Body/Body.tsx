import React from 'react';
import { Layout as AntLayout } from 'antd';

import CategoryLocation from '@/components/CategoryLocation';
import MainCategoryList from '@/components/MainCategoryList';
import ProductList from '@/components/ProductList';
import PropertyList from '@/components/PropertyList';

import './Body.scss';

const AntContent = AntLayout.Content;

const Body: React.FC = () => {
  return (
    <AntContent style={{ padding: '0 50px' }}>
      <CategoryLocation />

      <AntLayout className='site-layout-background' style={{ padding: '24px 0' }}>
        <MainCategoryList />
        <ProductList />
        <PropertyList />
      </AntLayout>
    </AntContent>
  );
};

export default Body;
