import styled, { css } from 'styled-components';

import { SignatureCardButtonProps } from './@types';

export const SignatureCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;

  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

export const SignatureCardContent = styled.div`
  margin: 5px;
  text-transform: uppercase;
`;

export const PlansContainer = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.fontColors.primary};
  justify-content: space-around;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PlanButton = styled.button<SignatureCardButtonProps>`
  ${({
    padding = 0,
    margin = 0,
    width = 150,
    height = 60,
    fontSize = 16,
    fontWeight = 600,
    radius = 5,
    color = 'primary',
    backgroundColor = 'yellow',
    flexDirection = 'row',
    flexWrap = false,
    justifyContent = 'center',
    alignItems = 'flex-start',
    alignContent = 'flex-start',
    textAlign = 'center',
    textTransform = 'none',
  }) => css`
    padding: ${padding}px;
    margin: ${margin}px;
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius}px;
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    color: ${color};
    background-color: ${backgroundColor};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap ? 'wrap' : 'nowrap'};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    text-align: ${textAlign};
    text-transform: ${textTransform};

    border: none;
  `}
`;
