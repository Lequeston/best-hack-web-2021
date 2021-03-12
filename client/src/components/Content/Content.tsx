import React from 'react';
import { Layout as AntLayout } from 'antd';

import Breadcrumb from '@components/Breadcrumb';
import MainCategoryList from '@components/Main-category-list';

import './Content.scss';

const AntContent = AntLayout.Content;

const Content: React.FC = () => {
  return (
    <AntContent style={{ padding: '0 50px' }}>
      <Breadcrumb />

      <AntLayout className='site-layout-background' style={{ padding: '24px 0' }}>
        <MainCategoryList />
      </AntLayout>
    </AntContent>
  );
};

export default Content;
