import React from 'react';
import { Layout as AntLayout } from 'antd';

import Breadcrumb from '@components/Breadcrumb';

import './Content.scss';

const AntContent = AntLayout.Content;

const Content: React.FC = () => {
  return (
    <AntContent style={{ padding: '0 50px' }}>
      <Breadcrumb />
    </AntContent>
  );
};

export default Content;
