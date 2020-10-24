import React from 'react';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

import * as S from './styled';

const Layout = () => {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content />
    </S.Grid>
  );
};

export default Layout;
