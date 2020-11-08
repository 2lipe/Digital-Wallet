import React, { InputHTMLAttributes } from 'react';

import * as S from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...rest }: InputProps) => <S.Container {...rest} />;

export default Input;
