import 'styled-components';

import { Theme } from 'mtrheme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
