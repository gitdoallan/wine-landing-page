import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import React from 'react';

import * as S from './styles';

export const Home: React.FC = () => (
  <S.HomeContainer>
    <Header />
    <Footer />
  </S.HomeContainer>
);
