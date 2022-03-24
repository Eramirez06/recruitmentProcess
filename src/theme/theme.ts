import {ITheme} from '.';
import {extendTheme} from 'native-base';

const Theme: ITheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    description: '#777777',
    title: '#171616',
    separators: '#EEEEEE',
    lines: '#D8D8D8',
    subTitle: '#202020',
  },
  fonts: {
    regular: 'PlayfairDisplay-Regular',
    semiBold: 'PlayfairDisplay-Medium',
    bold: 'PlayfairDisplay-Bold',
    regularMont: 'Montserrat-Regular',
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
