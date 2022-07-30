import * as S from './styles';

export const FooterLeft = () => {
  const year = new Date().getFullYear();
  const authors = [
    { name: 'Matheus H.', page: 'https://github.com/yMaatheus' },
    { name: 'Allan Carvalho', page: 'https://github.com/gitdoallan' },
    { name: 'Emerson Alves', page: 'https://github.com/EmersonAlves019' },
    { name: 'Adson Reis', page: 'https://github.com/BaianorASR' },
    { name: 'Diogo Martini', page: 'https://github.com/ogoiddev' },
  ];
  return (
    <S.Container>
      <p>
        © Copyright <b>Grupo 007</b> 2022 - {year}. Todos os direitos
        reservados.
      </p>
      <p>
        Desenvolvido por:
        <ul>
          {authors?.map(({ name, page }) => (
            <li key={name}>
              <a href={page}>{name}</a>
            </li>
          ))}
        </ul>
      </p>
    </S.Container>
  );
};
