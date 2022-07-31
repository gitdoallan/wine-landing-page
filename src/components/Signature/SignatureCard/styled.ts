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
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 80%;
    margin: 15px 0;
    
    .benefit {
      border: 1px solid;
      
      width: fit-content;
      padding: 8px;
      background: none;
      color: black;
      
    }

    .assign {
      border: none;
      padding: 8px;
      background: ${({ theme }) => theme.colors.yellow};
      color: black;
      font-weight: 600;
      width: 100%;

      :hover {
        filter: brightness(1.1);
        transition: 0.3s;
      }
    }


  }
`;

export const PlansContainer = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.fontColors.primary};
  justify-content: space-around;
  margin: 15px 0;

  div {
    .plan {
      font-size: 0.8rem;
    }
    .year {
      font-size: 1.5rem;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  .line1 span {
    text-decoration: line-through;
  }

  .line2 {
    font-size: 2.3rem;
  }

  .line3 span {
    font-size: 0.8rem;
  }

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
