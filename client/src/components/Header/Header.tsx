import React, { useRef, useEffect, Dispatch } from 'react';
import { Layout as AntLayout } from 'antd';

import './Header.scss';

interface Props {
  setHeight: Dispatch<React.SetStateAction<number>>;
}

const AntHeader = AntLayout.Header;

const Header: React.FC<Props> = ({ setHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      setHeight(ref.current.clientHeight);
    }
  });

  return (
    <div ref={ref}>
      <AntHeader></AntHeader>
    </div>
  );
};

export default Header;
