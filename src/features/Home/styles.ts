import {StyleSheet} from 'react-native';
import Theme from 'theme';
import {scaleHeight} from 'utils/resize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  title: {
    height: scaleHeight(75),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
