import { FC } from 'react';
import { Link } from 'react-scroll';
import { HeaderLinksProps } from './@types';
import * as S from './styles';

export const HeaderLink: FC<HeaderLinksProps> = ({ children, ...options }) => (
  <Link {...options}>
    <S.MenuItemContainer>{children}</S.MenuItemContainer>
  </Link>
);
