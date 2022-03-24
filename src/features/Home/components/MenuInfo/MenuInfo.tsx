import Typography from 'components/Typography';
import React, {memo, useCallback} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styles from './styles';
import ListMenu from '../ListMenu';

const renderScene = SceneMap({
  first: ListMenu,
  second: ListMenu,
  third: ListMenu,
  four: ListMenu,
});

const MenuInfo = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Small Plates'},
    {key: 'second', title: 'Principal'},
    {key: 'third', title: 'Desserts'},
    {key: 'four', title: 'Fishes'},
  ]);

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
