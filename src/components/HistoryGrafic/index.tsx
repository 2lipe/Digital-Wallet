import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import * as S from './styled';

type HistoryGraficProps = {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
};

const HistoryGrafic = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}: HistoryGraficProps) => (
  <S.Container>
    <S.ChartHeader>
      <h2>Histórico de Saldo</h2>

      <S.LegendContainer>
        <S.Legend color={lineColorAmountEntry}>
          <div></div>
          <span>Entradas</span>
        </S.Legend>
        <S.Legend color={lineColorAmountOutput}>
          <div></div>
          <span>Saídas</span>
        </S.Legend>
      </S.LegendContainer>
    </S.ChartHeader>

    <S.ChartContainer>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmountEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorAmountOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  </S.Container>
);

export default HistoryGrafic;