import { Logo } from '../Logo';
import React from 'react';

import * as S from './styles';

import { FacebookLogo, TwitterLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";

export const Footer: React.FC = () => (
  <S.FooterContainer>
    <S.FooterContent>
      <S.LogoContent>
        <Logo />
      </S.LogoContent>
      <S.ItemContent>
        <h3>CLUBE WINE</h3>
        <ul>
          <li>Como Funciona</li>
          <li>Indique Amigos</li>
          <li>WineBox Essenciais</li>
        </ul>
      </S.ItemContent>
      <S.ItemContent>
        <h3>Desenvolvedores</h3>
        <ul>
          <li>Allan Carvalho</li>
          <li>Matheus H.</li>
          <li>Emerson Alves</li>
          <li>Diogo Martini</li>
          <li>Adson Reis</li>
        </ul>
      </S.ItemContent>
      <S.ItemContent>
        <h3>Contato</h3>
        <p>Horário de atendimento:
          De segunda a sexta-feira de 09h as 18h. Exceto feriados.</p>
        <ul>
          <li>Telefone: <b>(27) 3202-2600</b></li>
          <li><a href=""><b>Central de ajuda</b></a></li>
        </ul>
      </S.ItemContent>
      <S.ItemContent>
        <h3>Social</h3>
        <S.SocialNetworks>
          <FacebookLogo size={32} color="#ffffff" weight="fill" />
          <TwitterLogo size={32} color="#ffffff" weight="fill" />
          <InstagramLogo size={32} color="#ffffff" weight="fill" />
          <YoutubeLogo size={32} color="#ffffff" weight="fill" />
        </S.SocialNetworks>
      </S.ItemContent>
    </S.FooterContent>
    <S.FooterContent>
      <S.Copyright>© 2022 <b>Grupo 007</b> | Todos os direitos reservados</S.Copyright>
    </S.FooterContent>
  </S.FooterContainer>
);
