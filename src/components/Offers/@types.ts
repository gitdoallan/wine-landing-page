import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link';
import { defaultTheme } from 'styles/themes';

type ColorOptions = keyof typeof defaultTheme.fontColors;

export type HeaderLinksProps = ReactScrollLinkProps & {
  children: React.ReactNode;
};

export type TextProps = {
  size?: number;
  color?: ColorOptions;
  weight?: number;
  center?: boolean;
  rezing?: boolean;
};

export type OffersButtonProps = {
  size?: number;
  color?: ColorOptions;
};
