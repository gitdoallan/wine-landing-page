import * as S from './styles';

export const Newsletter = () => {
  return (
    <S.NewsletterContainer>
      <S.NewsletterWrapper>
        <S.NewsletterTitle>
          Assine nossa Newsletter
          <p>e receba as melhores ofertas e dicas da Wine Club</p>
        </S.NewsletterTitle>
        <input type="text" placeholder="Digite seu e-mail" />
        <button>Hello world</button>
      </S.NewsletterWrapper>
    </S.NewsletterContainer>
  )
}
