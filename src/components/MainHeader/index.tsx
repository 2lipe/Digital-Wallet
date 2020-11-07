import React, { useMemo, useState } from 'react';

import Toggle from '../Toggle';
import emojis from '../../utils/emojis';

import { useTheme } from '../../hooks/useTheme';

import * as S from './styled';

const MainHeader = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false,
  );

  const emoji = useMemo(() => {
    const generateAleatoryEmojisIndex = Math.floor(
      Math.random() * emojis.length,
    );
    return emojis[generateAleatoryEmojisIndex];
  }, []);

  const handleChangeTheme = () => {
    const changeTheme = !darkTheme;
    setDarkTheme(changeTheme);
    toggleTheme();
  };

  return (
    <S.Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Felipe Vieira</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
