import React from 'react';
import { Layout as AntLayout, Menu as AntMenu } from 'antd';

import './PropertyList.scss';

const AntSider = AntLayout.Sider;
const AntSubMenu = AntMenu.SubMenu;

const PropertyList: React.FC = () => {
  return (
    <AntSider className='site-layout-background' reverseArrow={true} width={200}>
      <AntMenu mode='inline' defaultSelectedKeys={['1']} multiple={true} style={{ height: '100%' }}>
        <AntSubMenu title='Жирность'>
          <AntMenu.Item key='10%'>10%</AntMenu.Item>
          <AntMenu.Item key='20%'>20%</AntMenu.Item>
          <AntMenu.Item key='30%'>30%</AntMenu.Item>
        </AntSubMenu>
        <AntMenu.Item key='Пастеризованное'>Пастеризованное</AntMenu.Item>
      </AntMenu>
    </AntSider>
  );
};

export default PropertyList;
