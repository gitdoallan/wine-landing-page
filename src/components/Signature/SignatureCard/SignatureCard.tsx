import React from 'react';

import * as S from './styled';

const SignatureCard: React.FC = () => (
  <S.SignatureCardContainer>
    <S.SignatureCardContent>
      <S.PlansContainer>
        <div>
          <p>Plano</p>
          <p>Anual</p>
        </div>
        <S.PlanButton
          type="button"
          fontSize={18}
          fontWeight={600}
          color="primary"
          radius={50}
          height={46}
        >
          4 MESES OFF
        </S.PlanButton>
      </S.PlansContainer>

      <S.PriceContainer>
        <p>LAST PRICE</p>
        <p>PRICE</p>
        <p>economia de</p>
      </S.PriceContainer>

      <button type="button">2 Tacas de cristal</button>

      <button type="button">Assinatura anual</button>
    </S.SignatureCardContent>
  </S.SignatureCardContainer>
);

export default SignatureCard;
