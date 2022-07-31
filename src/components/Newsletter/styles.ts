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
`

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  max-width: 1024px;
`

export const NewsletterTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;

  p {
    font-weight: 700;
  }
`