import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Typography from 'components/Typography';
import styles from './styles';

const Header = ({}) => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'top', 'left']}>
      <Typography variant="subTitle">RESTAURANT NAME</Typography>
    </SafeAreaView>
  );
};

export default Header;
