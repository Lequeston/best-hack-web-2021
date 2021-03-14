import React from 'react';
import { Layout as AntLayout } from 'antd';
import { View } from '@components/Body';

import './ProductList.scss';

const AntContent = AntLayout.Content;

interface Props {
  view: View;
}

const ProductList: React.FC<Props> = ({ view }: Props) => {
  return <AntContent style={{ padding: '0 24px' }}>Product list</AntContent>;
};

export default ProductList;
