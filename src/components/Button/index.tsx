import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => (
  <S.Container {...rest}>{children}</S.Container>
);

export default Button;
