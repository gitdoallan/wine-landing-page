import { namespaces } from 'i18n/i18n.constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
const Home: React.FC = () => {
  const { t } = useTranslation(namespaces.common);

  return (
    <div>
      <h1>{t('welcome')}</h1>
    </div>
  );
};

export default Home;
