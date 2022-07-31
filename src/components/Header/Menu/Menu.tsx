import { CustomLink } from 'components/CustomLink';
import { namespaces } from 'i18n/i18n.constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { headerLinks } from 'services/data/header/links';

import * as S from './styles';

export const Menu: React.FC = () => {
  const { t } = useTranslation(namespaces.header);
  return (
    <S.MenuContainer>
      <button type="button">menu</button>
      <S.LinksContainer>
        {headerLinks.navLinks.map(({ id, text, link, isExternal }) => (
          <CustomLink key={id} to={link} isExternal={isExternal}>
            {t(text)}
          </CustomLink>
        ))}
      </S.LinksContainer>
    </S.MenuContainer>
  );
};
