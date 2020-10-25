import React, { ReactNode } from 'react';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

import * as S from './styled';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </S.Grid>
  );
};

export default Layout;
