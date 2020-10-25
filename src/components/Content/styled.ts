import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  padding: 25px;

  background-color: ${({ theme }) => theme.colors.primary};
`;
