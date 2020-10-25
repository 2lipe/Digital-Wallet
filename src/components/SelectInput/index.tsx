import React from 'react';

import * as S from './styled';

type SelectInputProps = {
  options: {
    value: string | number;
    label: string | number;
  }[];
};

const SelectInput = ({ options }: SelectInputProps) => {
  return (
    <S.Container>
      <select name="" id="">
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </S.Container>
  );
};

export default SelectInput;
