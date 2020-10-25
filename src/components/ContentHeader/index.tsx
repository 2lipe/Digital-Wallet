import React, { ReactNode } from 'react';

import * as S from './styled';

type ContentHeaderProps = {
  title: string;
  lineColor: string;
  children: ReactNode;
};

const ContentHeader = ({ title, lineColor, children }: ContentHeaderProps) => {
  return (
    <S.Container>
      <S.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </S.TitleContainer>
      <S.Controllers>{children}</S.Controllers>
    </S.Container>
  );
};

export default ContentHeader;
