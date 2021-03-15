import React, { useState } from 'react';

import { Layout as AntLayout } from 'antd';

import MainCategoryList from '@components/MainCategoryList';
import SubCategoryList from '@components/SubCategoryList';
import ProductList from '@components/ProductList';
import PropertyList from '@components/PropertyList';

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
        {view != View.Product ? <MainCategoryList /> : null}
        {view == View.MainCategory ? <SubCategoryList /> : null}
        {view != View.MainCategory ? <ProductList /> : null}
        {view == View.Product ? <PropertyList /> : null}
      </AntLayout>
    </AntContent>
  );
};

export default Body;
