import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';

import logoImg from '../../assets/logo.svg';

import * as S from './styled';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
    <S.Container>
      <S.Logo>
        <img
          src={logoImg}
          alt="Logotipo da aplicação Digital Wallet em formato de cifrão"
        />
        <h2>Digital Wallet</h2>
      </S.Logo>

      <S.Form onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Entrar</S.FormTitle>

        <Input
          type="email"
          placeholder="example@example.com"
          required
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="password"
          placeholder="*****"
          required
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
