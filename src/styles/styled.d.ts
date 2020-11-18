import 'styled-components';
import { ThemeProps } from '../models/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
