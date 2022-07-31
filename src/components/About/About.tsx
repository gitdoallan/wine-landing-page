import { FC } from 'react';
import wineVideo from '../../assets/wine-007.mp4';

import * as S from './styles';

export const About: FC = () => (
  <S.AboutContainer>
    <S.AboutVideoContainer>
      <S.Video autoPlay loop muted src={wineVideo} />
    </S.AboutVideoContainer>
    <S.AboutContent>
      <S.AboutTitle>
          Faça parte do MAIOR clube de vinhos do mundo!
          <span>
            Assine o Clube Wine <br />
            e ganhe até 4 meses de assinatura grátis.
          </span>
        <S.Button>EU QUERO</S.Button>
      </S.AboutTitle>
    </S.AboutContent>
  </S.AboutContainer>
);
