import {scaleHeight} from 'utils/resize';
import {StyleSheet} from 'react-native';
import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  customContent: {
    paddingBottom: scaleHeight(40),
  },
});

export default styles;
