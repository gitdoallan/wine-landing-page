import { CustomLink } from 'components/CustomLink';
import { namespaces } from 'i18n/i18n.constants';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styles';

export const Menu: React.FC = () => {
  const { t } = useTranslation(namespaces.header);
  return (
    <S.MenuContainer>
      <button type="button">menu</button>
      <S.LinksContainer>
        <CustomLink to="a">{t('links.club')}</CustomLink>
        <CustomLink to="b">{t('links.store')}</CustomLink>
        <CustomLink to="c">{t('links.producers')}</CustomLink>
        <CustomLink to="d">{t('links.specialOffers')}</CustomLink>
        <CustomLink to="e">{t('links.events')}</CustomLink>
      </S.LinksContainer>
    </S.MenuContainer>
  );
};
