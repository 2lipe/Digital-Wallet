import React, { useMemo } from 'react';

import Toggle from '../Toggle';
import emojis from '../../utils/emojis';

import * as S from './styled';

const MainHeader = () => {
  const emoji = useMemo(() => {
    const generateAleatoryEmojisIndex = Math.floor(
      Math.random() * emojis.length,
    );
    return emojis[generateAleatoryEmojisIndex];
  }, []);

  return (
    <S.Container>
      <Toggle />

      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Felipe Vieira</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
