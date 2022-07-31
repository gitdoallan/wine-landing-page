import * as S from './styles';

export const Newsletter = () => (
  <S.NewsletterContainer>
    <S.NewsletterWrapper>
      <S.NewsletterTitle>
        Assine nossa Newsletter
        <p>e receba as melhores ofertas e dicas do Clube Wine</p>
      </S.NewsletterTitle>
      <input type="text" placeholder="Digite seu e-mail" />
      <button type="button">eu quero!</button>
    </S.NewsletterWrapper>
  </S.NewsletterContainer>
);
