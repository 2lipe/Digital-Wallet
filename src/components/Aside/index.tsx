import React from 'react';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import * as S from './styled';

const Aside = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg
          src={logoImg}
          alt="Logo da Digital Wallet no canto direito da tela com o simbolo do cifrão"
        />
        <S.Title>Digital Wallet</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Aside;
