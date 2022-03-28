import {StyleSheet, TextStyle} from 'react-native';
import theme from 'theme';
import {scaleHeight, scaleWidth} from 'utils/resize';

const BASE_STYLE: TextStyle = {
  color: theme.colors.title,
};

export default StyleSheet.create({
  title: {
    ...BASE_STYLE,
    fontSize: scaleHeight(26),
    lineHeight: scaleHeight(35),
    fontFamily: theme.fonts.regular,
    letterSpacing: scaleWidth(2),
    textAlign: 'center',
  },
  subTitle: {
    ...BASE_STYLE,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    fontFamily: theme.fonts.regularMont,
    color: theme.colors.subTitle,
  },
  description: {
    ...BASE_STYLE,
    fontSize: scaleHeight(17),
    lineHeight: scaleHeight(23),
    fontFamily: theme.fonts.regular,
    color: theme.colors.description,
  },
  small: {
    ...BASE_STYLE,
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(18),
    fontFamily: theme.fonts.regularMont,
    color: theme.colors.description,
  },
  regularTextBody: {
    ...BASE_STYLE,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(25),
  },
});
