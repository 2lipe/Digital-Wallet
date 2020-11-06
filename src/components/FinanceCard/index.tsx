import React from 'react';

import * as S from './styled';

type FinanceCardProps = {
  title: string;
  subtitle: string;
  tagColor: string;
  amount: string;
};

const FinanceCard = ({
  title,
  subtitle,
  tagColor,
  amount,
}: FinanceCardProps) => (
  <S.Container>
    <S.Tag color={tagColor} />
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </S.Container>
);

export default FinanceCard;
