import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.purple};
  color: ${props => props.theme.fontColors.white};
  max-width: 100%;
  max-height: 100%;
  padding: 120px;

  a {
    text-decoration: none;
    color: ${props => props.theme.fontColors.grayLight};
  }

  @media screen and (max-width: 390px) {
    
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 28px;
  width: 70%;

  :nth-child(1) {
    border-bottom: solid 1px ${props => props.theme.fontColors.grayLight};
    margin-bottom: 34px;
  }
`

export const LogoContent = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 8px;
   margin-right: 32px;

   svg {
    align-self: center;
    transform: scale(1.4);
   }
`

export const ItemContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   width: 220px;
   height: 200px;

   h3 {
    align-self: start;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 1.2rem;
   }

   p {
    margin-bottom: 20px;
    max-width: 200px;
   }

   ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
   }

   li {
    color: ${props => props.theme.fontColors.grayLight};
   }
`


export const SocialNetworks = styled.div`

  svg {
    margin-right: 10px;
  }
`

export const Copyright = styled.span`
  color: ${props => props.theme.fontColors.grayLight};
`
