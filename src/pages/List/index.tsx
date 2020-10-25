import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { fruits, options } from './options';

import * as S from './styled';

const List = () => {
  return (
    <S.Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
        <SelectInput options={fruits} />
      </ContentHeader>
    </S.Container>
  );
};

export default List;
