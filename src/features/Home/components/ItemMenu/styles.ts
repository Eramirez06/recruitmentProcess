import {StyleSheet} from 'react-native';
import {scaleHeight} from 'utils/resize';
import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    marginTop: scaleHeight(25),
  },
  lines: {
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: theme.colors.lines,
    marginTop: scaleHeight(25),
  },
  customDesc: {
    textAlign: 'center',
    marginTop: scaleHeight(12),
  },
  customSmall: {
    marginTop: scaleHeight(12),
  },
});

export default styles;
