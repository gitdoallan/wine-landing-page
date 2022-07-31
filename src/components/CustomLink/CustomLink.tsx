import { FC } from 'react';
import { Link } from 'react-scroll';
import { CustomLinksProps } from './@types';
import * as S from './styles';

export const CustomLink: FC<CustomLinksProps> = ({
  children,
  isExternal,
  ...options
}) => {
  return isExternal ? (
    <S.Anchor href={options.to} target="_blank">
      <S.CustomLinkContainer>{children}</S.CustomLinkContainer>
    </S.Anchor>
  ) : (
    <Link {...options}>
      <S.CustomLinkContainer>{children}</S.CustomLinkContainer>
    </Link>
  );
};
