import { Container } from './styles';
import { footerLinks } from '../../../services/data/footer/links';
import { namespaces } from 'i18n/i18n.constants';
import { useTranslation } from 'react-i18next';

export const FooterLeft = () => {
  const { t } = useTranslation(namespaces.footer);
  const year = new Date().getFullYear();
  return (
    <Container>
      <p>
        © Copyright <b>Grupo 007</b> 2022 - {year}. {t('texts.copyright')}
      </p>
      <p>
        {t('texts.developedBy')}
        <ul>
          {footerLinks.authors.map(({ id, name, link }) => (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </p>
    </Container>
  );
};
