import {StyleSheet} from 'react-native';
import theme from 'theme';
import {scaleHeight} from 'utils/resize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  indicatorStyle: {
    backgroundColor: theme.colors.black,
    height: scaleHeight(3),
  },
  tabStyle: {
    backgroundColor: theme.colors.white,
    height: scaleHeight(60),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lines,
    borderTopColor: theme.colors.lines,
    elevation: 0,
  },
  customTab: {
    height: scaleHeight(60),
  },
  disableText: {
    color: 'gray',
  },
});

export default styles;
