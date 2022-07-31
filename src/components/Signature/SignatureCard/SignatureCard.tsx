import React from 'react';

import * as S from './styled';

import {IProps} from './@types'

const SignatureCard: React.FC<IProps> = ({ plan }: IProps) => (
  <S.SignatureCardContainer>
    <S.SignatureCardContent>
      <S.PlansContainer>
        <div>
          <p className='plan'>{plan}</p>
          <p className='year'>{plan}</p>
        </div>
        <S.PlanButton
          type="button"
          fontSize={18}
          fontWeight={600}
          color="white"
          radius={50}
          height={40}
          backgroundColor="purple"
        >
          4 MESES OFF
        </S.PlanButton>
      </S.PlansContainer>

      <S.PriceContainer>
        <p className='line1'>De <span>R$ 99,90</span> por</p>
        <p className='line2'><span>R$</span> R$ 79,92 <span>/mes</span></p>
        <p className='line3'>Economia de R$ 15,98 em 1 mes</p>
      </S.PriceContainer>
    
      <div className="buttons">
        <button className='benefit' type="button">2 Tacas de cristal</button>
        <button className='assign' type="button">{`Assinatura ${plan}`}</button>
      </div>

    </S.SignatureCardContent>
  </S.SignatureCardContainer>
);

export default SignatureCard;
