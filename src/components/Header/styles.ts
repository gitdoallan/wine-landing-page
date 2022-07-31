import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  padding: 0 2rem;

  width: 100%;
  height: 90px;
  background: ${props => props.theme.colors.purple};
  border-bottom: ${props => props.theme.colors.purpleLight} 1px solid;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

export const WineBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }
`