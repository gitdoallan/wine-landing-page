import styled from 'styled-components';

export const MenuItemContainer = styled.li`
  display: flex;
  color: ${props => props.theme.fontColors.primary};

  font-size: 1.125rem;
  justify-content: center;
  cursor: pointer;
  min-width: 100px;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.fontColors.primary};
    position: absolute;
    bottom: -10px;
  }

  &:hover {
    color: ${props => props.theme.fontColors.hover};
    position: relative;

    &:after {
      transition: 0.2s;
      width: 99%;
    }
  }
`;
