import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';

import './CategoryLocation.scss';

const CategoryLocation: React.FC = () => {
  return (
    <AntBreadcrumb className='category-location'>
      <AntBreadcrumb.Item>Продукты, напитки</AntBreadcrumb.Item>
      <AntBreadcrumb.Item>Молочные продукты</AntBreadcrumb.Item>
      <AntBreadcrumb.Item>Молоко</AntBreadcrumb.Item>
    </AntBreadcrumb>
  );
};

export default CategoryLocation;
