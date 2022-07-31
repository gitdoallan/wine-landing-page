import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;
