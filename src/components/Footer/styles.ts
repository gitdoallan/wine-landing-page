import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.purple};
  color: ${props => props.theme.fontColors.white};
  max-width: 100%;
  height: 600px;

  a {
    text-decoration: none;
    color: ${props => props.theme.fontColors.grayLight};
  }

  @media screen and (max-width: 1024px) {
    padding: 0px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 28px;
  min-width: 70%;

  :nth-child(1) {
    border-bottom: solid 1px ${props => props.theme.fontColors.grayLight};
    margin-bottom: 34px;
  }

  @media screen and (max-width: 1024px) {

    :nth-child(1) {
      height: 450px;
    }
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

  @media screen and (max-width: 1024px) {
    margin-top: 8px;
    margin-right: 0px;

    svg {
      transform: scale(1);
    }
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
    min-width: 100px;
   }

   li {
    color: ${props => props.theme.fontColors.grayLight};
   }

  
  @media screen and (max-width: 1024px) {
    max-width: 300px;
    height: auto;
    margin-top: 16px;

    h3 {
      margin-bottom: 12px;
    }

    p {
      margin-bottom: 8px;
      max-width: 500px;
    }

    ul {
      gap: 8px;
    }
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
`


export const SocialNetworks = styled.div`

  svg {
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 0px;
    margin-bottom: 12px;
  }
`

export const Copyright = styled.span`
  color: ${props => props.theme.fontColors.grayLight};
`
