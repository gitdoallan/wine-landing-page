import { FC } from 'react';
import { Link } from 'react-scroll';
import { CustomLinksProps } from './@types';
import * as S from './styles';

export const CustomLink: FC<CustomLinksProps> = ({ children, ...options }) => (
  <Link {...options}>
    <S.CustomLinkContainer>{children}</S.CustomLinkContainer>
  </Link>
);
