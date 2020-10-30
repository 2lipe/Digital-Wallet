import React from 'react';
import CountUp from 'react-countup';

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
  const iconSelected = () => {
    switch (icon) {
      case 'dolar':
        return dolarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return undefined;
    }
  };

  return (
    <S.Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={'R$ '}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      {iconSelected && <img src={iconSelected()} alt={title} />}
    </S.Container>
  );
};

export default WalletBox;
