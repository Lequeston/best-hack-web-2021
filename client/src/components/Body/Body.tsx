import React, { useEffect, useRef } from 'react';

import { Layout as AntLayout } from 'antd';

import MainCategoryList from '@/components/MainCategoryList';
import ProductList from '@/components/ProductList';
import PropertyList from '@/components/PropertyList';

import './Body.scss';

interface Props {
  heightOffset: number;
}

const AntContent = AntLayout.Content;

const Body: React.FC<Props> = ({ heightOffset }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      ref.current.style.minHeight = 'calc(100vh - ' + heightOffset + 'px)';
    }
  }, [heightOffset]);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
      <AntContent style={{ padding: '0 50px', display: 'flex', flexDirection: 'column' }}>
        <AntLayout className='site-layout-background' style={{ padding: '24px 0' }}>
          <MainCategoryList />
          <ProductList />
          <PropertyList />
        </AntLayout>
      </AntContent>
    </div>
  );
};

export default Body;
