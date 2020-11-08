import React from 'react';

import Input from '../../components/Input';

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

      <S.Form onSubmit={() => {}}>
        <S.FormTitle>Entrar</S.FormTitle>

        <Input type="email" placeholder="example@example.com" required />
        <Input type="password" placeholder="*****" required />

        <button type="submit">Acessar</button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
