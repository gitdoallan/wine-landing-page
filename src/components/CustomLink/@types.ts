import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link';

export type CustomLinksProps = ReactScrollLinkProps & {
  children: React.ReactNode;
  isExternal: boolean;
};
