import { HeaderLink } from '@components/HeaderLink';
import { FC } from 'react';
import { Logo } from '../Logo';

import * as S from './styles';

export const Header: FC = () => (
  <S.HeaderContainer data-testid="header">
    <S.HeaderContent>
      <Logo />
      <S.HeaderLinksContainer>
        <HeaderLink to="a">Clube</HeaderLink>
        <HeaderLink to="b">Loja</HeaderLink>
        <HeaderLink to="c">Produtores</HeaderLink>
        <HeaderLink to="d">Ofertas</HeaderLink>
        <HeaderLink to="e">Eventos</HeaderLink>
      </S.HeaderLinksContainer>
    </S.HeaderContent>
  </S.HeaderContainer>
);
