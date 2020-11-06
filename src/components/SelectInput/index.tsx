import React, { ChangeEvent } from 'react';

import * as S from './styled';

type SelectInputProps = {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
};

const SelectInput = ({ options, onChange, defaultValue }: SelectInputProps) => (
  <S.Container>
    <select name="" id="" onChange={onChange} defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </S.Container>
);

export default SelectInput;
