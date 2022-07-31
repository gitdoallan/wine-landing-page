import {} from './@types';

import { Ticket } from 'phosphor-react';
import { FC } from 'react';

import * as S from './styles';

export const Offers: FC = () => {
  const offers = [];

  return (
    <S.OffersContainer>
      <S.Container>
        <S.OffersWrapper>
          <S.OffersSVG />
          <S.OffersTopSideText>
            <S.Text size={32} color="wine">
              Assine Wine <br /> e descomplica!
            </S.Text>
          </S.OffersTopSideText>

          <S.OffersPromotions>
            <S.OffersPrice>4</S.OffersPrice>
            <S.OffersPromotionsDetails>
              <S.Text size={32}>Clube Wine com até</S.Text>
              <S.Spacer />
              <S.Text size={96}>
                Meses <br /> gratis
              </S.Text>
            </S.OffersPromotionsDetails>
          </S.OffersPromotions>
        </S.OffersWrapper>

        <S.OffersWrapper>
          <S.Text size={28} weight={600}>
            Como Sócio Wine você garante benefícios exclusivos
          </S.Text>
          <S.OffersButtonsContainer>
            <S.OffersButton>
              <Ticket size={32} color="#212220" weight="duotone" />
              15% OFF em todas as compras Wine
            </S.OffersButton>
            <S.OffersButton>3x mais cashback pelo WineUP</S.OffersButton>
            <S.OffersButton>Taxa de entrega diferenciada</S.OffersButton>
            <S.OffersButton>Brindes e cupons no Indique Amigos</S.OffersButton>
          </S.OffersButtonsContainer>
        </S.OffersWrapper>
      </S.Container>
    </S.OffersContainer>
  );
};
