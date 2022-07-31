import { FC } from 'react';
import wineVideo from '../../assets/wine-007.mp4';

import * as S from './styles';

export const About: FC = () => (
  <S.AboutContainer>
    <S.AboutVideoContainer>
      <S.Video autoPlay loop muted src={wineVideo} />
    </S.AboutVideoContainer>
  </S.AboutContainer>
);
