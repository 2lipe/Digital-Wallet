import React, { createContext, useState, useContext, ReactNode } from 'react';

type AuthContextProps = {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
};

type ContentProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: ContentProps) => {
  const getUserLoggedInLocalStorage = () => {
    const isLogged = localStorage.getItem('@digital-wallet:logged');
    return isLogged ? true : false;
  };

  const [logged, setLogged] = useState<boolean>(getUserLoggedInLocalStorage);

  const signIn = (email: string, password: string) => {
    const isEmailAndPasswordValid =
      email === 'felipe.svfx@gmail.com' && password === '123456';

    if (isEmailAndPasswordValid) {
      localStorage.setItem('@digital-wallet:logged', 'true');
      setLogged(true);
    } else {
      alert('Senha ou usuário inválidos');
    }
  };

  const signOut = () => {
    localStorage.removeItem('@digital-wallet:logged');
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
