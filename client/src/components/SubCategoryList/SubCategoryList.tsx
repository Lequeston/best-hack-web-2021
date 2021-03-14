import React from 'react';
import { Layout as AntLayout } from 'antd';
import { View } from '@components/Body';

import './SubCategoryList.scss';

const AntContent = AntLayout.Content;

interface Props {
  view: View;
}

const SubCategoryList: React.FC<Props> = ({ view }: Props) => {
  return <AntContent style={{ padding: '0 24px' }}>Sub categories</AntContent>;
};

export default SubCategoryList;
