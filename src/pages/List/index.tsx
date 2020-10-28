import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinanceCard from '../../components/FinanceCard';

import listOfMonths from '../../utils/months';
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
  const captureMonth = new Date().getMonth() + 1;
  const captureYear = new Date().getFullYear();
  const frequency = ['recorrente', 'eventual'];

  const [data, setData] = useState<DataProps[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(captureMonth);
  const [yearSelected, setYearSelected] = useState<number>(captureYear);
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(
    frequency,
  );

  const { type } = match.params;

  const pageData = useMemo(() => {
    return type === 'entry-balance'
      ? { title: 'Entradas', lineColor: '#F7931B', data: gains }
      : { title: 'Saídas', lineColor: '#E44C4E', data: expense };
  }, [type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    const { data } = pageData;

    data.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      const yearIsNotIncludeInsideList = !uniqueYears.includes(year);
      if (yearIsNotIncludeInsideList) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return { value: year, label: year };
    });
  }, [pageData]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  }, []);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(
      (item) => item === frequency,
    );

    const existAlreadyFrequency = alreadySelected >= 0;
    if (existAlreadyFrequency) {
      const filteredFrequency = frequencyFilterSelected.filter(
        (item) => item === frequency,
      );
      setFrequencyFilterSelected(filteredFrequency);
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  };

  const handleMonthSelected = (month: string) => {
    try {
      const parsedMonth = Number(month);
      setMonthSelected(parsedMonth);
    } catch (error) {
      throw new Error('Não foi possível capturar o mês selecionado');
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parsedYear = Number(year);
      setYearSelected(parsedYear);
    } catch (error) {
      throw new Error('Não foi possível capturar o ano selecionado');
    }
  };

  useEffect(() => {
    const { data } = pageData;

    const filteredDate = data.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const filterByYearMonthAndFrequency =
        month === monthSelected &&
        year === yearSelected &&
        frequencyFilterSelected.includes(item.frequency);

      return filterByYearMonthAndFrequency;
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
  }, [pageData, monthSelected, yearSelected, frequencyFilterSelected]);

  return (
    <S.Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={({ target }) => handleMonthSelected(target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={({ target }) => handleYearSelected(target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <S.Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent
            ${frequencyFilterSelected.includes('recorrente') && 'tag-active'}`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>

        <button
          type="button"
          className={`tag-filter tag-filter-eventual
            ${frequencyFilterSelected.includes('eventual') && 'tag-active'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
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
