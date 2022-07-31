import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  width: 100%;
  height: 90px;
  background: #fff;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

export const HeaderLinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
