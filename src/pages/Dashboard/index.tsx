import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { options, fruits } from './options';

import * as S from './styled';

const Dashboard = () => {
  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} onChange={() => {}} />
        <SelectInput options={fruits} onChange={() => {}} />
      </ContentHeader>
    </S.Container>
  );
};

export default Dashboard;
