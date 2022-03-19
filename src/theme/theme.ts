import {ITheme} from '.';
import {extendTheme} from 'native-base';

const Theme: ITheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#000000',
    blue: '#2121a6',
    yellow: '#c4cf30',
    green: '#43cf30',
    purple: '#8230cf',
    red: '#cf3030',
  },
  fonts: {
    regular: 'PlayfairDisplay-Regular',
    semiBold: 'PlayfairDisplay-Medium',
    bold: 'PlayfairDisplay-Bold',
  },
  fontSizes: {
    xSmall: 9,
    small: 12,
    regular: 14,
    large: 16,
    xLarge: 18,
    xxLarge: 20,
    xxxLarge: 32,
    xxxxLarge: 40,
  },
};

export const NativeBaseTheme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        color: 'light.900',
      },
      defaultProps: {
        placeholderTextColor: 'light.700',
      },
    },
  },
});

export default Theme;
