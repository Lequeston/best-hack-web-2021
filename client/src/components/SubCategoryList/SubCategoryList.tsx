import React from 'react';
import { Layout as AntLayout } from 'antd';

import './SubCategoryList.scss';

const AntContent = AntLayout.Content;

const SubCategoryList: React.FC = () => {
  return <AntContent style={{ padding: '0 24px' }}>Sub categories</AntContent>;
};

export default SubCategoryList;
