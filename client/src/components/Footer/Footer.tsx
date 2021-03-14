import React, { useRef, useEffect, Dispatch } from 'react';
import { Layout as AntLayout } from 'antd';

import './Footer.scss';

interface Props {
  setHeight: Dispatch<React.SetStateAction<number>>;
}

const AntFooter = AntLayout.Footer;

const Footer: React.FC<Props> = ({ setHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      setHeight(ref.current.clientHeight);
    }
  });

  return (
    <div ref={ref}>
      <AntFooter></AntFooter>
    </div>
  );
};

export default Footer;
