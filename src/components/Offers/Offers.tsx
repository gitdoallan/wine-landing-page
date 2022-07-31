import { Gift, Money, Ticket, Truck } from 'phosphor-react';
import { FC } from 'react';
import { namespaces } from 'i18n/i18n.constants';
import { useTranslation } from 'react-i18next';

import OffersAsset from './image.png';
import * as S from './styles';

export const Offers: FC = () => {
  const { t } = useTranslation(namespaces.offers);

  return (
    <S.OffersContainer id="offers">
      <S.Container>
        <S.OffersWrapper>
          <S.OffersSVG src={OffersAsset} />
          <S.OffersTopSideText>
            <S.Text size={56} color="primary" weight={700}>
              {t('texts.signUp')}
            </S.Text>
            <S.Text size={56} color="primary" weight={500}>
              {t('texts.signUpSlogan')}
            </S.Text>
          </S.OffersTopSideText>
        </S.OffersWrapper>

        <S.OffersWrapper>
          <S.OffersPromotions>
            <S.OffersPrice>4</S.OffersPrice>
            <S.OffersPromotionsDetails>
              <S.Text color="white" size={32}>
                {t('texts.wineClubPromoUpTo')}
              </S.Text>
              <S.Spacer />
              <S.Text color="white" size={96} weight={700}>
                {t('texts.monthsCaps')} <br /> {t('texts.free')}
              </S.Text>
            </S.OffersPromotionsDetails>
          </S.OffersPromotions>
        </S.OffersWrapper>

        <S.OffersButtonsWrapper>
          <S.Text color="white" size={28} weight={600} center>
            {t('texts.benefits')}
          </S.Text>
          <S.OffersButtonsContainer>
            <S.OffersButton>
              <Ticket size={68} color="#212220" weight="duotone" />
              <S.Text rezing size={18}>
                {t('texts.discount')}
              </S.Text>
            </S.OffersButton>

            <S.OffersButton>
              <Money size={68} color="#212220" weight="duotone" />
              <S.Text rezing size={18}>
                {t('texts.cashback')}
              </S.Text>
            </S.OffersButton>

            <S.OffersButton>
              <Truck size={68} color="#212220" weight="duotone" />
              <S.Text rezing size={18}>
                {t('texts.deliveryFeePromo')}
              </S.Text>
            </S.OffersButton>

            <S.OffersButton>
              <Gift size={68} color="#212220" weight="duotone" />
              <S.Text rezing size={18}>
                {t('texts.referralPromo')}
              </S.Text>
            </S.OffersButton>
          </S.OffersButtonsContainer>
        </S.OffersButtonsWrapper>
      </S.Container>
    </S.OffersContainer>
  );
};
