import {IItemMenuProps} from '../types';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Typography from 'components/Typography';

const ItemMenu = ({title, description, price}: IItemMenuProps) => {
  return (
    <View style={styles.container}>
      <Typography variant="title">{title}</Typography>
      <Typography style={styles.customDesc} variant="description">
        {description}
      </Typography>
      <Typography style={styles.customSmall} variant="small">
        {price}
      </Typography>
      <View style={styles.lines} />
    </View>
  );
};

export default ItemMenu;
