import {EAppRoutes, TAppStackRouter} from 'routes/AppRoutes/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AllRoutes = TAppStackRouter;
export type AllNames = EAppRoutes;

export type AppNavigationProp<RouteName extends keyof AllRoutes = AllNames> =
  NativeStackScreenProps<AllRoutes, RouteName>;
