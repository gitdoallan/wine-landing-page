import * as S from './styles';

export const FooterCenter = () => {
  const networks = [
    {
      link: '',
      icon: 'https://img.wine.com.br/fenix/image/_big_bang/icons/icon-youtube-pink.svg',
      alt: 'youtube-logo',
    },
    {
      link: '',
      icon: 'https://img.wine.com.br/fenix/image/_big_bang/icons/icon-instagran-pink.svg',
      alt: 'instagram-logo',
    },
    {
      link: '',
      icon: 'https://img.wine.com.br/fenix/image/_big_bang/icons/icon-twitter-pink.svg',
      alt: 'twitter-logo',
    },
    {
      link: '',
      icon: 'https://img.wine.com.br/fenix/image/_big_bang/icons/icon-facebook-pink.svg',
      alt: 'facebook-logo',
    },
  ];
  return (
    <S.Container>
      <h3>Alguma dúvida? A gente ajuda você!</h3>
      <h4>Horário de atendimento:</h4>
      <p>De segunda a sexta-feira de 09h as 18h. Exceto feriados.</p>
      <p>
        <a href="https://centraldeajuda.wine.com.br/">CENTRAL DE AJUDA</a>
      </p>
      <hr />
      <div>
        {networks?.map(({ icon, link, alt }) => (
          <a key={alt} href={link}>
            <img src={icon} alt={alt} />
          </a>
        ))}
      </div>
    </S.Container>
  );
};
