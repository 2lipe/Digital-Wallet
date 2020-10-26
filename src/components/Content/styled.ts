import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  padding: 25px;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.primary};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;
