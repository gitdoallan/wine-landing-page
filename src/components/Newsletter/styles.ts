import styled from 'styled-components';

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.wine};
  color: ${props => props.theme.fontColors.white};
  max-width: 100%;
  height: 100px;

  @media (max-width: 1024px ) {
    height: 300px;
    min-width: 350px;
    
  }
`

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  max-width: 1024px;

  input {
    flex: 1;
    border-radius: 15px;
    padding: 0 14px;
    min-height: 43px;
    background-color: ${props => props.theme.colors.yellowLight};
    transition: ease all 2s;
  }

  button {
    border: none;
    border-radius: 1px;
    height: 43px;
    width: 150px;
    font-weight: 800;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.purple};
    background-color: ${props => props.theme.colors.yellow};
    transition: ease all 2s;
  }

  
  @media screen and (max-width: 1024px ) {
    flex-direction: column;
    text-align: center;
    padding: 0 25px;
    input {
      width: 75%;
      transition: ease all 2s;
    }
  }
`

export const NewsletterTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;

  p {
    font-weight: 700;
  }
`