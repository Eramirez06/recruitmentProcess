import React, {FC, memo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {IPreloadScreenProps} from './types';
import styles from './styles';
import theme from 'theme';

const PreloadScreen: FC<IPreloadScreenProps> = ({children, isLoading}) => {
  return (
    <View style={[styles.container, isLoading && styles.center]}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={theme.colors.black} />
      ) : (
        children
      )}
    </View>
  );
};

export default memo(PreloadScreen);
