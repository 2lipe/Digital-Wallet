import React, { ReactNode } from 'react';

import * as S from './styled';

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Content;
