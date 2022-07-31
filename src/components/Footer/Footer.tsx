import { Logo } from '../Logo';
import { FC } from 'react';
import { namespaces } from 'i18n/i18n.constants';
import { useTranslation } from 'react-i18next';
import { footerLinks } from 'services/data/footer/links';
import { SocialMediaLinks } from 'components/Footer/SocialMediaLinks';

import * as S from './styles';

export const Footer: FC = () => {
  const { t } = useTranslation(namespaces.footer);
  const currentYear = new Date().getFullYear();
  return (
  <S.FooterContainer>
    <S.FooterContent>

      <S.LogoContent>
        <Logo />
      </S.LogoContent>

      <S.ItemContent>
        <h3>{t('texts.wineClub')}</h3>
        <ul>
          <li>{t('texts.howItWorks')}</li>
          <li>{t('texts.referFriends')}</li>
          <li>{t('texts.wineBoxEssentials')}</li>
        </ul>
      </S.ItemContent>

      <S.ItemContent>
        <h3>{t('texts.developedBy')}</h3>
        <ul>
        { footerLinks.authors.map((author) => (
            <li key={author.id}>
              <a href={author.link}>{author.name}</a>
            </li>
          )) }
        </ul>
      </S.ItemContent>

      <S.ItemContent>
        <h3>{t('texts.contactUs')}</h3>
        <p>
          {t('texts.businessHours')}
        </p>
        <ul>
          <li>
            <b>{t('texts.phone')} {footerLinks.phoneNumber.number}</b>
          </li>
          <li>
            <a href={footerLinks.customerService.link}>
              <b>{t(footerLinks.customerService.text)}</b>
            </a>
          </li>
        </ul>
      </S.ItemContent>

      <S.ItemContent>
        <h3>{t('texts.socialMedia')}</h3>
        <S.SocialNetworks>
          <SocialMediaLinks />
        </S.SocialNetworks>
      </S.ItemContent>

    </S.FooterContent>

    <S.FooterContent>
      <S.Copyright>
        © {currentYear} <b>Grupo 007</b> | {t('texts.copyright')}
      </S.Copyright>
    </S.FooterContent>

  </S.FooterContainer>
  );
};
