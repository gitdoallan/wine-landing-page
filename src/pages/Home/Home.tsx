import React from 'react';

import { About } from '../../components/About';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Offers } from '../../components/Offers';
import { Newsletter } from '../../components/Newsletter';
import * as S from './styles';

export const Home: React.FC = () => (
  <S.HomeContainer>
    <Header />
    <About />
    <Offers />
    <Newsletter />
    <Footer />
  </S.HomeContainer>
);
