import React from 'react';
import {StatusBar} from 'react-native';
import AppRoutes from 'routes/AppRoutes';
import theme from 'theme';

const SplashScreen = () => {
  return (
    <>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <AppRoutes />
    </>
  );
};

export default SplashScreen;
