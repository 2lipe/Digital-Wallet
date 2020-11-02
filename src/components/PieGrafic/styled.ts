import styled from 'styled-components';

type LegendsProps = {
  color: string;
};

export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
`;

export const LegendsContainer = styled.ul`
  list-style: none;
  overflow-y: scroll;
  padding-right: 15px;
  height: 175px;

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

export const Legends = styled.li<LegendsProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  font-size: 16px;

  > div {
    background: ${({ color }) => color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 7px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
