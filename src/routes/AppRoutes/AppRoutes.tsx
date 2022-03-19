import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'features/Home';
import {EAppRoutes, TAppStackRouter} from './types';

const AppStack = createNativeStackNavigator<TAppStackRouter>();

const AppRoutes = () => (
  <AppStack.Navigator
    initialRouteName={EAppRoutes.HOME_SCREEN}
    screenOptions={{headerShown: false}}>
    <AppStack.Screen component={Home} name={EAppRoutes.HOME_SCREEN} />
  </AppStack.Navigator>
);

export default AppRoutes;
