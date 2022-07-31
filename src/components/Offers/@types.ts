import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link';
import { defaultTheme } from 'styles/themes';

type ColorOptions = keyof typeof defaultTheme.colors;

export type HeaderLinksProps = ReactScrollLinkProps & {
  children: React.ReactNode;
};

export type TextProps = {
  size?: number;
  color?: ColorOptions;
  weight?: number;
};

export type OffersButtonProps = {
  size?: number;
  color?: ColorOptions;
};
