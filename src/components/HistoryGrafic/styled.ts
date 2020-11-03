import styled from 'styled-components';

type LegendProps = {
  color: string;
};

export const ChartContainer = styled.div`
  flex: 1;
  height: 300px;
`;

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;
`;

export const ChartHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 18px;
  }
`;

export const LegendContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const Legend = styled.li<LegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  margin-left: 7px;
  padding-right: 18px;

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
    margin-left: 5px;
  }
`;
