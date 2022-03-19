import {
  CommonActions,
  DrawerActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {AllRoutes, AllNames} from 'routes/Routes';

export const privateNavigatorRef = createNavigationContainerRef<AllRoutes>();

const resetNavigation = <TRouteName extends keyof AllRoutes>(
  routes: Array<{key: string; name: TRouteName; path?: string}>,
) => {
  privateNavigatorRef.reset({
    index: 1,
    routes,
  });
};

const goBack = () => {
  privateNavigatorRef.goBack();
};

const navigate = <TRouteName extends keyof AllRoutes>(
  name: AllNames,
  params?: AllRoutes[TRouteName],
) => {
  privateNavigatorRef.navigate(name, params);
};

const openDrawer = () => {
  privateNavigatorRef.dispatch(DrawerActions.openDrawer());
};

const removeScreens = <TRouteName extends keyof AllRoutes>(
  pagesToRemove: TRouteName,
  pageToAdd?: {key: string; name: TRouteName; path?: string},
) => {
  privateNavigatorRef.dispatch(state => {
    const routes = state.routes.filter(r => !pagesToRemove.includes(r.name));
    if (pageToAdd) {
      routes.push(pageToAdd);
    }
    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
};

export {goBack, navigate, openDrawer, removeScreens, resetNavigation};
