import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinanceCard from '../../components/FinanceCard';
import { years, months } from './options';

import gains from '../../repositories/gains';
import expense from '../../repositories/expenses';

import * as S from './styled';

type RouteParamsListProps = {
  match: {
    params: {
      type: string;
    };
  };
};

type DataProps = {
  id: string;
  description: string;
  FormattedAmount: string;
  frequency: string;
  FormattedDate: string;
  tagColor: string;
};

const List = ({ match }: RouteParamsListProps) => {
  const [data, setData] = useState<DataProps[]>([]);

  const { type } = match.params;

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expense;
  }, [type]);

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        FormattedAmount: item.amount,
        frequency: item.frequency,
        FormattedDate: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      };
    });

    setData(response);
  }, []);

  return (
    <S.Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <S.Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>

        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </S.Filters>

      <S.Content>
        {data.map((item) => (
          <FinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.FormattedDate}
            amount={item.FormattedAmount}
          />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default List;
