import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import en from 'assets/en.png';
import br from 'assets/br.png';
import es from 'assets/es.png';
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
      <option value="en">
        <img src={en} alt="en" />
      </option>
      <option value="es">
        <img src={es} alt="es" />
      </option>
      <option value="pt">
        <img src={br} alt="pt" />
      </option>
    </select>
  );
};
