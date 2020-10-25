import styled from 'styled-components';

type ContainerProps = {
  color: string;
};

type TagProps = {
  color: string;
};

export const Container = styled.li<ContainerProps>`
  background: ${({ color }) => color};
  list-style: none;
  border-radius: 5px;
  margin: 10px;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.white};
    padding-left: 10px;
  }

  > div span {
    font-weight: bolder;
  }

  > h3 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Tag = styled.div<TagProps>`
  width: 10px;
  height: 60%;
  background: ${({ color }) => color};
  position: absolute;
  left: 0;
`;
