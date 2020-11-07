import React from 'react';

import * as S from './styled';

type ToggleProps = {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
};

const Toggle = ({ checked, labelLeft, labelRight, onChange }: ToggleProps) => (
  <S.Container>
    <S.ToggleLabel>{labelLeft}</S.ToggleLabel>
    <S.ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <S.ToggleLabel>{labelRight}</S.ToggleLabel>
  </S.Container>
);

export default Toggle;
