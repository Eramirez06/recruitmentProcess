import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Typography from 'components/Typography';
import styles from './styles';
import {IHeaderProps} from 'components/Header/types';

const Header: FC<IHeaderProps> = ({name}) => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'top', 'left']}>
      <Typography variant="subTitle">{name}</Typography>
    </SafeAreaView>
  );
};

export default Header;
