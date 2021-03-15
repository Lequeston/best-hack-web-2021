import React from 'react';
import { Layout as AntLayout, Menu as AntMenu } from 'antd';

import './MainCategoryList.scss';
import categoryList from '../../data/categoryList.json';

const AntSider = AntLayout.Sider;

const MainCategoryList: React.FC = () => {
  return (
    <AntSider className='site-layout-background main-category-list' width={'fit-content'}>
      <AntMenu mode='inline' defaultSelectedKeys={['1']}>
        {Object.keys(categoryList).map((category, key) => {
          return <AntMenu.Item key={key}>{category}</AntMenu.Item>;
        })}
      </AntMenu>
    </AntSider>
  );
};

export default MainCategoryList;
