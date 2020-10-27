import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinanceCard from '../../components/FinanceCard';
import { years, months } from './options';

import gains from '../../repositories/gains';
import expense from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

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
  const captureMonth = String(new Date().getMonth() + 1);
  const captureYear = String(new Date().getFullYear());

  const [data, setData] = useState<DataProps[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(captureMonth);
  const [yearSelected, setYearSelected] = useState<string>(captureYear);

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
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedData = filteredDate.map((item, index) => {
      return {
        id: String(index),
        description: item.description,
        FormattedAmount: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        FormattedDate: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      };
    });

    setData(formattedData);
  }, [listData, monthSelected, yearSelected]);

  return (
    <S.Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput
          options={months}
          onChange={({ target }) => setMonthSelected(target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={({ target }) => setYearSelected(target.value)}
          defaultValue={yearSelected}
        />
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
