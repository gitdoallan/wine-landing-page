import styled from 'styled-components';

export const CustomLinkContainer = styled.li`
  display: flex;
  justify-content: center;

  position: relative;

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
    color: ${props => props.theme.colors.white};
    text-shadow: 0 0 10px ${props => props.theme.colors.yellowLight};

    &:after {
      transition: 0.2s;
      width: 99%;
    }
  }

  @media (max-width: 1024px) {
      &:after {
      transition: 0.2s;
      width: 99%;
    }

     &:hover {
    color: ${props => props.theme.colors.grayLight};
  }
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
   `