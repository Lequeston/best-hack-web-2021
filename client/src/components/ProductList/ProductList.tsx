import React, { useState, useEffect } from 'react';
import { Layout as AntLayout } from 'antd';
import { View } from '@components/Body';

import './ProductList.scss';

const AntContent = AntLayout.Content;

interface Props {
  view: View;
}

const ProductList: React.FC<Props> = ({ view }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  useEffect(() => {
    switch (view) {
      case View.MainCategory:
        setIsCollapsed(true);
        break;
      default:
        setIsCollapsed(false);
        break;
    }
  }, [view]);

  return (
    <AntContent
      style={{
        padding: '0 24px',
        display: isCollapsed ? 'none' : 'flex',
        flexDirection: 'column'
      }}
    >
      Product list
    </AntContent>
  );
};

export default ProductList;
