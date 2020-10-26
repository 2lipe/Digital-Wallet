import React, { useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinanceCard from '../../components/FinanceCard';
import { years, months, properties } from './options';

import * as S from './styled';

type RouteParamsListProps = {
  match: {
    params: {
      type: string;
    };
  };
};

const List = ({ match }: RouteParamsListProps) => {
  const { type } = match.params;

  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type]);

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
        <FinanceCard {...properties} />
      </S.Content>
    </S.Container>
  );
};

export default List;
