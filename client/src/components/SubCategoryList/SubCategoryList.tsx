import React, { useState, useEffect } from 'react';
import { Layout as AntLayout } from 'antd';
import { View } from '@components/Body';

import './SubCategoryList.scss';

const AntContent = AntLayout.Content;

interface Props {
  view: View;
}

const SubCategoryList: React.FC<Props> = ({ view }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    switch (view) {
      case View.MainCategory:
        setIsCollapsed(false);
        break;
      default:
        setIsCollapsed(true);
        break;
    }
  }, [view]);

  return (
    <AntContent style={{ padding: '0 24px', display: isCollapsed ? 'none' : 'block' }}>
      Sub categories
    </AntContent>
  );
};

export default SubCategoryList;
