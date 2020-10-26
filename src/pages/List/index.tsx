import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinanceCard from '../../components/FinanceCard';
import { years, months, properties } from './options';

import * as S from './styled';

const List = () => {
  return (
    <S.Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
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
