import React, { useState } from 'react';

import { Layout as AntLayout } from 'antd';

import MainCategoryList from '@/components/MainCategoryList';
import SubCategoryList from '@components/SubCategoryList';
import ProductList from '@/components/ProductList';
import PropertyList from '@/components/PropertyList';

import './Body.scss';

const AntContent = AntLayout.Content;

export enum View {
  MainCategory,
  SubCategory,
  Product
}

const Body: React.FC = () => {
  const [view, setView] = useState<View>(View.MainCategory);

  return (
    <AntContent className='main-content'>
      <AntLayout className='main-layout site-layout-background'>
        <MainCategoryList view={view} />
        <SubCategoryList view={view} />
        <ProductList view={view} />
        <PropertyList view={view} />
      </AntLayout>
    </AntContent>
  );
};

export default Body;
