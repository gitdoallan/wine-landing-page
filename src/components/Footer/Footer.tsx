import React from 'react';

import * as S from './styles';
import { FooterRight } from './FooterRight';
import { FooterCenter } from './FooterCenter';
import { FooterLeft } from './FooterLeft';

export const Footer: React.FC = () => (
  <S.Container>
    <FooterRight />
    <FooterCenter />
    <FooterLeft />
  </S.Container>
);
