import styled from "styled-components";

export const ReviewsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(50% 50% at 50% 50%, #FFFBEF 0%, rgba(255, 251, 239, 0.29) 100%);
`

export const ReviewsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 100px;
`

export const ReviewsTitle = styled.h2`
  font-size: 2.5rem;
` 

export const ReviewsItemContainer = styled.div`

` 

export const ReviewsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 300px;
  transform: rotate(40deg);
`

export const ReviewsItemTitle = styled.h3`
  font-size: 1.5rem;

`

export const ReviewsItemContent = styled.p`
  font-size: 1.2rem;
`