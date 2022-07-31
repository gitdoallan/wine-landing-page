import { Reviews } from 'components/Reviews';
import { Signature } from 'components/Signature';
import React from 'react';

import { About } from '../../components/About';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Newsletter } from '../../components/Newsletter';
import { Offers } from '../../components/Offers';
import * as S from './styles';

export const Home: React.FC = () => (
  <S.HomeContainer>
    <Header />
    <About />
    <Offers />
    <Signature />
    <Reviews />
    <Newsletter />
    <Footer />
  </S.HomeContainer>
);
