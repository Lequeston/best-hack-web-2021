import React from 'react';
import { Layout as AntLayout } from 'antd';

import './ProductList.scss';

const AntContent = AntLayout.Content;

const ProductList: React.FC = () => {
  return <AntContent className='product-list'>Product list</AntContent>;
};

export default ProductList;
