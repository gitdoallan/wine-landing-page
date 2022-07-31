import * as S from './styles';
import { namespaces } from 'i18n/i18n.constants';
import { useTranslation } from 'react-i18next';

export const Newsletter = () => {
  const { t } = useTranslation(namespaces.newsletter);
  return (
    <S.NewsletterContainer>
      <S.NewsletterWrapper>
        <S.NewsletterTitle>
          {t('texts.signUp')}
          <p>{t('texts.signUpBonus')}</p>
        </S.NewsletterTitle>
        <input type="text" placeholder={t('texts.signUpPlaceholder')} />
        <button>{t('texts.signUpBtn')}</button>
      </S.NewsletterWrapper>
    </S.NewsletterContainer>
  );
}
