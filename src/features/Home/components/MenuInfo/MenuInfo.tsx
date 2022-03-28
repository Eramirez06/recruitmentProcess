import Typography from 'components/Typography';
import React, {FC, memo, useCallback} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import styles from './styles';
import ListMenu from '../ListMenu';
import {IMenuProps, IScene} from '../types';

const renderScene = ({route}: {route: IScene}) => {
  switch (route.key) {
    default:
      return <ListMenu listMenuInfo={route?.options} />;
  }
};

const MenuInfo: FC<IMenuProps> = ({infoRestaurant}) => {
  const layout = useWindowDimensions();
  const menus = infoRestaurant.menus.map(val => ({
    key: val?.name,
    title: val?.name,
    options: val?.options,
  }));

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(menus);

  const renderLabel = useCallback(
    ({route, focused}) => (
      <Typography style={!focused ? styles.disableText : {}} variant="subTitle">
        {route.title}
      </Typography>
    ),
    [],
  );

  const renderTabBar = useCallback(
    props => (
      <TabBar
        {...props}
        renderLabel={renderLabel}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabStyle}
        tabStyle={styles.customTab}
        scrollEnabled
      />
    ),
    [renderLabel],
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default memo(MenuInfo);
