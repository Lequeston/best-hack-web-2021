import React, { useRef, useEffect, Dispatch } from 'react';
import { Layout as AntLayout } from 'antd';

import './Footer.scss';

const AntFooter = AntLayout.Footer;

const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return <AntFooter></AntFooter>;
};

export default Footer;
