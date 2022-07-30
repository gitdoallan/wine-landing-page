import { HeaderLink } from '@components/HeaderLink';
import { FC } from 'react';
import { Logo } from '../Logo';
import { namespaces } from 'i18n/i18n.constants';
import { useTranslation } from 'react-i18next';

import * as S from './styles';

export const Header: FC = () => {
  const { t } = useTranslation(namespaces.header);
  return (
    <S.HeaderContainer data-testid="header">
      <S.HeaderContent>
        <Logo />
        <S.HeaderLinksContainer>
          <HeaderLink to="a">{t('links.club')}</HeaderLink>
          <HeaderLink to="b">{t('links.store')}</HeaderLink>
          <HeaderLink to="c">{t('links.producers')}</HeaderLink>
          <HeaderLink to="d">{t('links.specialOffers')}</HeaderLink>
          <HeaderLink to="e">{t('links.events')}</HeaderLink>
        </S.HeaderLinksContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
