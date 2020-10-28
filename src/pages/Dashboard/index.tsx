import React, { useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import listOfMonths from '../../utils/months';
import {
  captureMonth,
  captureYear,
  handleMonthSelected,
  handleYearSelected,
} from '../../utils/functions';

import * as S from './styled';

const Dashboard = () => {
  const [monthSelected, setMonthSelected] = useState<number>(captureMonth);
  const [yearSelected, setYearSelected] = useState<number>(captureYear);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    const entriesAndOuts = [...expenses, ...gains];

    entriesAndOuts.forEach((item) => {
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
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  }, []);

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={({ target }) =>
            handleMonthSelected(target.value, setMonthSelected)
          }
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={({ target }) =>
            handleYearSelected(target.value, setYearSelected)
          }
          defaultValue={yearSelected}
        />
      </ContentHeader>
    </S.Container>
  );
};

export default Dashboard;
