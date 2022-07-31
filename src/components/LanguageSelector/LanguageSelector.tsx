import { FC } from 'react';
import { useTranslation } from 'react-i18next';

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
