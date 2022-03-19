import Theme from './theme';

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
}

export interface IColors {
  primary: string;
  secondary: string;
  blue: string;
  green: string;
  purple: string;
  yellow: string;
  red: string;
}

export interface IFonts {
  regular: string;
  semiBold: string;
  bold: string;
}

export interface IFontSizes {
  xSmall: number;
  small: number;
  regular: number;
  large: number;
  xLarge: number;
  xxLarge: number;
  xxxLarge: number;
  xxxxLarge: number;
}

export default Theme;
