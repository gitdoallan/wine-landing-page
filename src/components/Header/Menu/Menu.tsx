import { CustomLink } from 'components/CustomLink';
import { namespaces } from 'i18n/i18n.constants';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, X } from 'phosphor-react';
import { headerLinks } from 'services/data/header/links';

import * as S from './styles';
import { MenuProps } from './@types';

export const Menu: FC<MenuProps> = ({ children }) => {
  const { t } = useTranslation(namespaces.header);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.MenuContainer>
      <S.MenuButton type="button" onClick={() => setIsMenuOpen(prev => !prev)}>
        {isMenuOpen ? (
          <X size={36} color={'#fdfdfd'} />
        ) : (
          <List size={36} color={'#fdfdfd'} />
        )}
      </S.MenuButton>
      <S.LinksContainer isMenuOpen={isMenuOpen}>
        {headerLinks?.navLinks?.map(({ id, text, link, isExternal }) => (
          <CustomLink key={id} to={link} isExternal={isExternal}>
            {t(text)}
          </CustomLink>
        ))}
      </S.LinksContainer>
      <div>{children}</div>
    </S.MenuContainer>
  );
};
