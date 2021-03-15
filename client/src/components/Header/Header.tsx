import React, { useRef, useEffect, Dispatch } from 'react';
import { Layout as AntLayout } from 'antd';

import './Header.scss';

const AntHeader = AntLayout.Header;

const Header: React.FC = () => {
  return <AntHeader></AntHeader>;
};

export default Header;
