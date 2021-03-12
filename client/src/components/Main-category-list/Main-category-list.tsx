import React from 'react';
import { Layout as AntLayout, Menu as AntMenu } from 'antd';

import './Main-category-list.scss';

const AntSider = AntLayout.Sider;

const MainCategoryList: React.FC = () => {
  return (
    <AntSider className='site-layout-background' width={200}>
      <AntMenu style={{ width: 256 }} defaultSelectedKeys={['1']}>
        <AntMenu.Item key='1'>Электроника</AntMenu.Item>

        <AntMenu.Item key='2'>Продукты и напитки</AntMenu.Item>

        <AntMenu.Item key='3'>Одежда и обувь</AntMenu.Item>
      </AntMenu>
    </AntSider>
  );
};

export default MainCategoryList;
