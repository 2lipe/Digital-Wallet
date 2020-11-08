import React from 'react';

import logoImg from '../../assets/logo.svg';

import * as S from './styled';

const SignIn = () => {
  return (
    <S.Container>
      <S.Logo>
        <img
          src={logoImg}
          alt="Logotipo da aplicação Digital Wallet em formato de cifrão"
        />
        <h2>Digital Wallet</h2>
      </S.Logo>

      <S.Form>
        <S.FormTitle>Entrar</S.FormTitle>

        <input type="text"></input>
        <input type="text"></input>

        <button type="submit">Acessar</button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
