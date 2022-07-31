import { Container } from './styles';
import { namespaces } from 'i18n/i18n.constants';
import { useTranslation } from 'react-i18next';

export const FooterRight = () => {
  const { t } = useTranslation(namespaces.footer);
  return (
    <Container>
      <div>
        <img
          src="https://img.wine.com.br/fenix/image/_big_bang/logos/logo_w.svg"
          alt="Logo Wine"
        />
        <div>
          <h3>W2W E-Commerce de Vinhos S.A</h3>
          <p>CNPJ: 09.813.204/0002-05</p>
        </div>
      </div>
      <address>
        <p>Rua Comendador Alcides Simão Helou, 1565</p>
        <p>Serra - ES - CEP 29168-090</p>
      </address>
      <p>{t('texts.alcoholWarning')}</p>
    </Container>
  );
};
