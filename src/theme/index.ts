import theme from './theme';

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
}

export interface IColors {
  white: string;
  black: string;
  description: string;
  title: string;
  separators: string;
  lines: string;
  subTitle: string;
}

export interface IFonts {
  regular: string;
  semiBold: string;
  bold: string;
  regularMont: string;
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

export default theme;
