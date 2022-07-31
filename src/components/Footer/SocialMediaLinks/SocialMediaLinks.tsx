import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react';
import { FC } from 'react';

export const SocialMediaLinks: FC = () => (
  <>
    <a
      target="_blank"
      href="https://www.facebook.com/winevinhos/"
      rel="noreferrer"
    >
      <FacebookLogo size={32} color="#ffffff" weight="fill" />
    </a>
    <a target="_blank" href="https://twitter.com/wine_vinhos" rel="noreferrer">
      <TwitterLogo size={32} color="#ffffff" weight="fill" />
    </a>
    <a
      target="_blank"
      href="https://www.instagram.com/winevinhos/"
      rel="noreferrer"
    >
      <InstagramLogo size={32} color="#ffffff" weight="fill" />
    </a>
    <a
      target="_blank"
      href="https://www.youtube.com/user/WineVinhos"
      rel="noreferrer"
    >
      <YoutubeLogo size={32} color="#ffffff" weight="fill" />
    </a>
  </>
);
