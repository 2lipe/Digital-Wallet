import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Profile = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
