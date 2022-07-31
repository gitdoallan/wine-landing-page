import styled, { css } from 'styled-components';

import { OffersButtonProps, TextProps } from './@types';
import { OffersAsset } from './OffersAsset';

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

  max-width: 1920px;
  max-height: 1000px;

  background-color: ${({ theme }) => theme.colors.purple};
`;

export const OffersWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.red};
`;

export const OffersSVG = styled(OffersAsset)``;

export const OffersTopSideText = styled.h1`
  position: absolute;
`;

export const OffersPromotions = styled.div`
  display: flex;
  font-size: 10rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  gap: 24px;

  align-items: flex-end;
  border: 1px solid ${({ theme }) => theme.colors.red};
`;

export const OffersPrice = styled.p`
  border: 1px solid ${({ theme }) => theme.colors.red};
  font-size: 250px;
  display: flex;
  line-height: 250px;
`;

export const OffersPromotionsDetails = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.red};
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p<TextProps>`
  ${({ weight = 400, size, color = 'white', theme }) => css`
    font-size: ${`${size}px` || '1rem'};
    line-height: ${`${size}px` || '1rem'};
    font-weight: ${weight};
    color: ${theme.colors[color]};
  `}
`;

export const Spacer = styled.div`
  height: 16px;
`;

export const OffersButtonsContainer = styled.div`
  display: flex;
  gap: 45px;
  border: 1px solid ${({ theme }) => theme.colors.red};
`;

export const OffersButton = styled.button<OffersButtonProps>`
  padding: 8px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  height: 100px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;
