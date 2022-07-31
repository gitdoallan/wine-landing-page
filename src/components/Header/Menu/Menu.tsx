import { CustomLink } from 'components/CustomLink';
import { namespaces } from 'i18n/i18n.constants';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, X } from 'phosphor-react';

import * as S from './styles';

export const Menu: FC = () => {
  const { t } = useTranslation(namespaces.header);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.MenuContainer>
      <S.MenuButton type="button" onClick={() => setIsMenuOpen(prev => !prev)}>
        {isMenuOpen ? <X size={36} /> : <List size={36} />}
      </S.MenuButton>
      <S.LinksContainer isMenuOpen={isMenuOpen}>
        <CustomLink to="a">{t('links.club')}</CustomLink>
        <CustomLink to="b">{t('links.store')}</CustomLink>
        <CustomLink to="c">{t('links.producers')}</CustomLink>
        <CustomLink to="d">{t('links.specialOffers')}</CustomLink>
        <CustomLink to="e">{t('links.events')}</CustomLink>
      </S.LinksContainer>
    </S.MenuContainer>
  );
};
