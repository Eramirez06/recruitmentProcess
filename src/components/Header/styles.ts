import {StyleSheet} from 'react-native';
import theme from 'theme';
import {scaleHeight} from 'utils/resize';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scaleHeight(90),
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.lines,
  },
});

export default styles;
