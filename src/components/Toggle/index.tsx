import React from 'react';

import * as S from './styled';

const Toggle = () => {
  return (
    <S.Container>
      <S.ToggleLabel>Light</S.ToggleLabel>
      <S.ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => {
          console.log('Checado');
        }}
      />
      <S.ToggleLabel>Dark</S.ToggleLabel>
    </S.Container>
  );
};

export default Toggle;
