import styled, { css } from 'styled-components';
import { SLinksContainer } from './@types';

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MenuButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const LinksContainer = styled.ul<SLinksContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    display: none;

    ${props =>
      props.isMenuOpen &&
      css`
        display: flex;
        background-color: ${props.theme.colors.yellowLight};
        flex-direction: column;
        position: absolute;
        gap: 4rem;
        top: 90px;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1;

        * {
          font-size: 2rem;
          color: ${props.theme.colors.purple};
        }
      `}
  }
`;
