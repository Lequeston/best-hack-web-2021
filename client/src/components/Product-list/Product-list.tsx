import React from 'react';
import { Layout as AntLayout } from 'antd';

import './Product-list.scss';

const AntContent = AntLayout.Content;

const ProductList: React.FC = () => {
  return <AntContent style={{ padding: '0 24px', minHeight: 280 }}>Product list</AntContent>;
};

export default ProductList;
