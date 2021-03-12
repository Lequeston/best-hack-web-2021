import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';

import './Breadcrumb.scss';

const Breadcrumb: React.FC = () => {
  return (
    <AntBreadcrumb style={{ margin: '16px 0' }}>
      <AntBreadcrumb.Item>Продукты, напитки</AntBreadcrumb.Item>
      <AntBreadcrumb.Item>Молочные продукты</AntBreadcrumb.Item>
      <AntBreadcrumb.Item>Молоко</AntBreadcrumb.Item>
    </AntBreadcrumb>
  );
};

export default Breadcrumb;
