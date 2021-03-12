import React from 'react';
import { Layout as AntLayout } from 'antd';

import './Content.scss';

const AntContent = AntLayout.Content;

const Content: React.FC = () => {
  return <AntContent style={{ padding: '0 50px' }}></AntContent>;
};

export default Content;
