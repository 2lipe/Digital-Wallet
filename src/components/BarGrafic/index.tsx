import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import * as S from './styled';

type BarChartProps = {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
};

const BarGrafic = ({ title, data }: BarChartProps) => (
  <S.Container>
    <S.SideLeft>
      <h2>{title}</h2>

      <S.LegendsContainer>
        {data.map(
          (item) =>
            item.percent > 0 && (
              <S.Legends key={item.name} color={item.color}>
                <div>{item.percent}%</div>
                <span>{item.name}</span>
              </S.Legends>
            ),
        )}
      </S.LegendsContainer>
    </S.SideLeft>

    <S.SideRight>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey="amount" name="Valor">
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} cursor="pointer" />
            ))}
          </Bar>
          <Tooltip
            cursor={{ fill: 'none' }}
            formatter={(value) => formatCurrency(Number(value))}
          />
        </BarChart>
      </ResponsiveContainer>
    </S.SideRight>
  </S.Container>
);

export default BarGrafic;
