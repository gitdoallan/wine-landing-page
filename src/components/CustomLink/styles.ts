import styled from 'styled-components';

export const CustomLinkContainer = styled.li`
  display: flex;
  justify-content: center;

  position: relative;
  min-width: 100px;

  cursor: pointer;
  color: ${props => props.theme.colors.grayLight};
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.grayLight};
    position: absolute;
    bottom: -10px;
  }

  &:hover {
    font-weight: 600;

    &:after {
      transition: 0.2s;
      width: 99%;
    }
  }
`;
