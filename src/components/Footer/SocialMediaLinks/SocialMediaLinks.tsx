import { FC } from 'react';

import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
} from 'phosphor-react';

export const SocialMediaLinks: FC = () => {
  return (
    <>
      <a target="_blank" href="https://www.facebook.com/winevinhos/">
        <FacebookLogo size={32} color="#ffffff" weight="fill"/>
      </a>
      <a target="_blank" href="https://twitter.com/wine_vinhos">
        <TwitterLogo size={32} color="#ffffff" weight="fill"/>
      </a>
      <a target="_blank" href="https://www.instagram.com/winevinhos/">
        <InstagramLogo size={32} color="#ffffff" weight="fill"/>
      </a>
      <a target="_blank" href="https://www.youtube.com/user/WineVinhos">
        <YoutubeLogo size={32} color="#ffffff" weight="fill"/>
      </a>
    </>
  );
}