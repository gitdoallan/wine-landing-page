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
      <a href="https://www.facebook.com/winevinhos/">
        <FacebookLogo />
      </a>
      <a href="https://twitter.com/wine_vinho">
        <TwitterLogo />
      </a>
      <a href="https://www.instagram.com/winevinhos/">
        <InstagramLogo />
      </a>
      <a href="https://www.youtube.com/user/WineVinhos">
        <YoutubeLogo />
      </a>
    </>
  );
}