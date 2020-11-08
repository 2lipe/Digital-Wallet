import React from 'react';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import { useAuth } from '../../hooks/useAuth';

import logoImg from '../../assets/logo.svg';

import * as S from './styled';

const Aside = () => {
  const { signOut } = useAuth();

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
        <S.MenuItemLink to="/">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink to="/list/output-balance">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>
        <S.MenuItemLink onClick={signOut} to="#">
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Aside;
