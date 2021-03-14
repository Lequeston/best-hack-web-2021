import React, { useEffect, useRef, useState } from 'react';

import { Layout as AntLayout } from 'antd';

import MainCategoryList from '@/components/MainCategoryList';
import SubCategoryList from '@components/SubCategoryList';
import ProductList from '@/components/ProductList';
import PropertyList from '@/components/PropertyList';

import './Body.scss';

const AntContent = AntLayout.Content;

export enum View {
  MainCategory,
  SubCategory,
  Product
}

interface Props {
  heightOffset: number;
}

const Body: React.FC<Props> = ({ heightOffset }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View>(View.MainCategory);

  useEffect(() => {
    if (ref) {
      ref.current.style.minHeight = 'calc(100vh - ' + heightOffset + 'px)';
    }
  }, [heightOffset]);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
      <AntContent style={{ padding: '0 50px', display: 'flex', flexDirection: 'column' }}>
        <AntLayout
          className='site-layout-background'
          style={{ padding: '24px 0', display: 'flex', flexDirection: 'row' }}
        >
          <MainCategoryList view={view} />
          <SubCategoryList view={view} />
          <ProductList view={view} />
          <PropertyList view={view} />
        </AntLayout>
      </AntContent>
    </div>
  );
};

export default Body;
