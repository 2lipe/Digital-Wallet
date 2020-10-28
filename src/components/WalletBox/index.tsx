import React from 'react';

import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import * as S from './styled';

type WalletBoxProps = {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dolar' | 'arrowUp' | 'arrowDown';
  color: string;
};

const WalletBox = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}: WalletBoxProps) => {
  return (
    <S.Container color={color}>
      <span>{title}</span>
      <h1>{amount}</h1>
      <small>{footerLabel}</small>
      <img src={dolarImg} alt={title} />
    </S.Container>
  );
};

export default WalletBox;
