import 'styled-components';

import { defaultTheme } from './index';

declare module 'styled-components' {
  export type DefaultTheme = defaultTheme;
}
