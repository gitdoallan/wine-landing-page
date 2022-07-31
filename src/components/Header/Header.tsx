import { FC } from 'react';
import { Logo } from '../Logo';
import { Menu } from './Menu';
import winebox from '../../assets/winebox.png';
import { LanguageSelector } from '../LanguageSelector';

import * as S from './styles';

export const Header: FC = () => (
  <S.HeaderContainer data-testid="header">
    <S.HeaderContent>
      <Logo />
      <Menu>
        <S.WineBox>
          <img src={winebox} />
          <LanguageSelector />
        </S.WineBox>
      </Menu>
    </S.HeaderContent>
  </S.HeaderContainer>
);
