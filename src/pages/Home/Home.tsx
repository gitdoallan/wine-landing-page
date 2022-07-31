import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import React from 'react';

import * as S from './styles';
import { About } from '../../components/About';

export const Home: React.FC = () => (
  <S.HomeContainer>
    <Header />
    <About />
    <Footer />
  </S.HomeContainer>
);
