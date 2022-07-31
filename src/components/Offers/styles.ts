import styled, { css } from 'styled-components';

import { OffersButtonProps, TextProps } from './@types';

export const OffersContainer = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  padding: 5px;

  max-width: 1920px;
  max-height: 1000px;

  background-color: ${({ theme }) => theme.colors.purple};

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

export const OffersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  justify-content: space-between;

  max-width: 1200px;
  text-transform: uppercase;
`;

export const OffersSVG = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const OffersTopSideText = styled.div`
  margin-top: 16px;
  align-self: start;
  z-index: 1;

  @media (max-width: 1024px) {
    margin-top: calc(100vw * 0.03);
    margin-left: 24px;
    p {
      font-size: 50px;
      &:last-child {
        font-size: 32px;
      }
    }
  }

  @media (max-width: 640px) {
    margin-top: calc(100vw * 0.03 - 8px);
    margin-left: 24px;
    p {
      font-size: 24px;

      &:last-child {
        font-size: 14px;
      }
    }
  }
`;

export const OffersPromotions = styled.div`
  z-index: 1;

  display: flex;
  font-size: 10rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  gap: 24px;
  align-self: flex-end;
  text-transform: uppercase;

  align-items: flex-end;

  @media (max-width: 1024px) {
    margin-right: 10px;
    gap: 16px;
  }
`;

export const OffersPrice = styled.p`
  font-size: 250px;
  display: flex;
  line-height: 250px;

  @media (max-width: 1024px) {
    font-size: 150px;
    line-height: 150px;
  }
`;

export const OffersPromotionsDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p<TextProps>`
  ${({
    weight = 400,
    size = 16,
    color = 'primary',
    theme,
    center = false,
  }) => css`
    font-size: ${`${size}px` || '1rem'};
    line-height: ${`${size}px` || '1rem'};
    text-align: ${center ? 'center' : 'left'};
    font-weight: ${weight};
    color: ${theme.fontColors[color]};
  `}

  @media (max-width: 1024px) {
    ${({ size = 16, rezing }) =>
      !rezing &&
      css`
        font-size: calc(${`${size}px` || '1rem'} * 0.6);
        line-height: calc(${`${size}px` || '1rem'} * 0.6);
      `}
  }
`;

export const Spacer = styled.div`
  height: 16px;
`;

export const OffersButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  text-transform: uppercase;
`;

export const OffersButtonsContainer = styled.div`
  display: flex;
  gap: 45px;
  max-width: 1200px;
  margin-top: 16px;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }

  @media (max-width: 690px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
`;

export const OffersButton = styled.button<OffersButtonProps>`
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.yellow};

  p {
    text-align: left;
    margin-left: 10px;
  }
`;
