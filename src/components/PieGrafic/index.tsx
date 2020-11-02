import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import * as S from './styled';

type PieGraficProps = {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
};

const PieGrafic = ({ data }: PieGraficProps) => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
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
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </S.SideRight>
  </S.Container>
);

export default PieGrafic;
