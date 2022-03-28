import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from 'components/Header';
import Typography from 'components/Typography';
import PreloadScreen from 'components/PreloadScreen';
import MenuInfo from './components/MenuInfo';
import {useAppDispatch, useAppSelector} from 'hooks/useRedux';
import {request} from './store/reducer';
import i18n from 'i18n';

const Home = () => {
  const dispatch = useAppDispatch();
  const {infoRestaurant, isLoading} = useAppSelector(({home}) => ({
    infoRestaurant: home.data,
    isLoading: home.isLoading,
  }));

  useEffect(() => {
    dispatch(request());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <PreloadScreen isLoading={isLoading}>
        <Header name={infoRestaurant?.name} />
        <View style={styles.title}>
          <Typography variant="subTitle">{i18n.t('home.menuTitle')}</Typography>
        </View>
        <MenuInfo infoRestaurant={infoRestaurant} />
      </PreloadScreen>
    </View>
  );
};

export default Home;
