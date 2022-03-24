import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from 'components/Header';
import Typography from 'components/Typography';
import MenuInfo from './components/MenuInfo';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.title}>
        <Typography variant="subTitle">MENU</Typography>
      </View>
      <MenuInfo />
    </View>
  );
};

export default Home;
