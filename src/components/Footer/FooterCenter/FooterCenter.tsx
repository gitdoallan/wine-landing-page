import * as S from './styles';
import { footerLinks } from 'services/data/footer/links';
import { namespaces } from 'i18n/i18n.constants';
import { useTranslation } from 'react-i18next';

export const FooterCenter = () => {
  const { t } = useTranslation(namespaces.footer);
  return (
    <S.Container>
      <h3>{t('texts.helpTitle')}</h3>
      <h4>{t('texts.businessHoursTitle')}</h4>
      <p>{t('texts.businessHours')}</p>
      <p>
        <a href={footerLinks.customerService.link}>
          {t(footerLinks.customerService.text)}
        </a>
      </p>
      <hr />
      <div>
        {footerLinks.socialNetworks.map(({ id, icon, link, alt }) => (
          <a key={id} href={link}>
            <img src={icon} alt={alt} />
          </a>
        ))}
      </div>
    </S.Container>
  );
};
