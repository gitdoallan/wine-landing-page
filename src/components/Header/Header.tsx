import { FC } from 'react';

import winebox from '../../assets/winebox.png';
import { Logo } from '../Logo';
import { Menu } from './Menu';
import * as S from './styles';

export const Header: FC = () => (
  <S.HeaderContainer data-testid="header">
    <S.HeaderContent>
      <Logo />
      <Menu>
        <S.WineBox>
          <img src={winebox} />
        </S.WineBox>
      </Menu>
    </S.HeaderContent>
  </S.HeaderContainer>
);
