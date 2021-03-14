import React from 'react';
import { Layout as AntLayout, Menu as AntMenu } from 'antd';
import { View } from '@components/Body';

import './MainCategoryList.scss';
import categoryList from '../../data/categoryList.json';

const AntSider = AntLayout.Sider;

interface Props {
  view: View;
}

const MainCategoryList: React.FC<Props> = ({ view }: Props) => {
  return (
    <AntSider className='site-layout-background' width='fit-content'>
      <AntMenu mode='inline' defaultSelectedKeys={['1']} style={{ height: '100%' }}>
        {Object.keys(categoryList).map((category, key) => {
          return <AntMenu.Item key={key}>{category}</AntMenu.Item>;
        })}
      </AntMenu>
    </AntSider>
  );
};

export default MainCategoryList;
