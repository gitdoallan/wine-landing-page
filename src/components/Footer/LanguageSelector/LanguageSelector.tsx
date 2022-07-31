import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import en from 'assets/en.png';
import br from 'assets/br.png';
import es from 'assets/es.png';

import * as S from './styles';

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const changeLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
      <S.LanguageSelectorContainer>
        <img alt="English" src={en} onClick={() => changeLanguage('en')} />
        <img alt="Português brasileiro" src={br} onClick={() => changeLanguage('br')} />
        <img alt="Español" src={es} onClick={() => changeLanguage('es')} />
      </S.LanguageSelectorContainer>
  );
};
