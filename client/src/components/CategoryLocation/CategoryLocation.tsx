import React, { useRef, useEffect, Dispatch } from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';

import './CategoryLocation.scss';

interface Props {
  setHeight: Dispatch<React.SetStateAction<number>>;
}

const CategoryLocation: React.FC<Props> = ({ setHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      setHeight(ref.current.clientHeight);
    }
  });

  return (
    <div ref={ref}>
      <AntBreadcrumb style={{ margin: '16px 0', display: 'flex', justifyContent: 'center' }}>
        <AntBreadcrumb.Item>Продукты, напитки</AntBreadcrumb.Item>
        <AntBreadcrumb.Item>Молочные продукты</AntBreadcrumb.Item>
        <AntBreadcrumb.Item>Молоко</AntBreadcrumb.Item>
      </AntBreadcrumb>
    </div>
  );
};

export default CategoryLocation;
