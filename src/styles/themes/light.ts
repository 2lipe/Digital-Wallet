import { ThemeProps } from '../../models/Theme';
import { Colors } from '../colors';

export default {
  title: 'light',

  colors: {
    primary: Colors.grayLight,
    secondary: Colors.white,
    tertiary: Colors.whiteSmoth,

    white: Colors.black,
    black: Colors.white,
    gray: Colors.gray,

    success: Colors.greenLight,
    info: Colors.purpleLight,
    warning: Colors.redLight,
  },
} as ThemeProps;
