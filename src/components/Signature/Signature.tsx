import { FC, useState } from 'react';

import SignatureCard from './SignatureCard/SignatureCard';
import * as S from './styles';

export const Signature: FC = () => {
  const [signature, setSignature] = useState(false);

  return (
    <S.Content>
      <div className="child-1">
        <div>
          <div>
            <p>WineBox</p>
            <p>ESSÊNCIA S</p>
          </div>
          <p>MAIS DETALHES</p>
        </div>
        <p>
          Rótulos descomplicados, perfeitos para quem está começando a desbravar
          o mundo do vinho.
        </p>
      </div>

      <div className="child-2">
        <img src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png" />
        <img src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png" />
        <img src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png" />
      </div>

      <div className="child-3">
        <SignatureCard plan="Mensal"/>
        <SignatureCard plan="Anual"/>
      </div>
    </S.Content>
  );
};
