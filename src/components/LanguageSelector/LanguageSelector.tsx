import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import brazilIcon from 'assets/brazil.png';
import spainIcon from 'assets/spain.png';
import usaIcon from 'assets/usa.png';

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const changeLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select
      defaultValue={language}
      onChange={({ target }) => changeLanguage(target.value)}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="pt">Português</option>
    </select>
  );
};
