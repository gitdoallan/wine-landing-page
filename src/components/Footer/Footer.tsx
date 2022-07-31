import React from 'react';

import { Container } from './styles';
import { FooterRight } from './FooterRight';
import { FooterCenter } from './FooterCenter';
import { FooterLeft } from './FooterLeft';

export const Footer: React.FC = () => (
  <Container>
    <FooterRight />
    <FooterCenter />
    <FooterLeft />
  </Container>
);
