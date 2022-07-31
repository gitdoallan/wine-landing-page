import 'styled-components';

import { defaultTheme } from './index';

type ITheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
