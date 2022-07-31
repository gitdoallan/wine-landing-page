import {} from './@types';

import { Gift, Money, Ticket, Truck } from 'phosphor-react';
import { FC } from 'react';

import OffersAsset from './image.png';
import * as S from './styles';

export const Offers: FC = () => {
  const offers = [];

  return (
    <S.OffersContainer id="offers">
      <S.Container>
        <S.OffersWrapper>
          <S.OffersSVG src={OffersAsset} />
          <S.OffersTopSideText>
            <S.Text size={56} color="primary" weight={700}>
              Assine Wine
            </S.Text>
            <S.Text size={56} color="primary" weight={500}>
              e descomplica!
            </S.Text>
          </S.OffersTopSideText>
        </S.OffersWrapper>

        <S.OffersWrapper>
          <S.OffersPromotions>
            <S.OffersPrice>4</S.OffersPrice>
            <S.OffersPromotionsDetails>
              <S.Text color="white" size={32}>
                Clube Wine com até
              </S.Text>
              <S.Spacer />
              <S.Text color="white" size={96} weight={700}>
                Meses <br /> gratis
              </S.Text>
            </S.OffersPromotionsDetails>
          </S.OffersPromotions>
        </S.OffersWrapper>

        <S.OffersButtonsWrapper>
          <S.Text color="white" size={28} weight={600} center>
            Como Sócio Wine você garante benefícios exclusivos
          </S.Text>
          <S.OffersButtonsContainer>
            <S.OffersButton>
              <Ticket size={68} color="#212220" weight="duotone" />
              <S.Text rezing size={18}>
                15% OFF em todas as compras Wine
              </S.Text>
            </S.OffersButton>

            <S.OffersButton>
              <Money size={68} color="#212220" weight="duotone" />
              <S.Text rezing size={18}>
                3x mais cashback pelo WineUP
              </S.Text>
            </S.OffersButton>

            <S.OffersButton>
              <Truck size={68} color="#212220" weight="duotone" />
              <S.Text rezing size={18}>
                Taxa de entrega diferenciada
              </S.Text>
            </S.OffersButton>

            <S.OffersButton>
              <Gift size={68} color="#212220" weight="duotone" />
              <S.Text rezing size={18}>
                Brindes e cupons no Indique Amigos
              </S.Text>
            </S.OffersButton>
          </S.OffersButtonsContainer>
        </S.OffersButtonsWrapper>
      </S.Container>
    </S.OffersContainer>
  );
};
