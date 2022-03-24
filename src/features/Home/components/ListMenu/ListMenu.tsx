import ItemMenu from '../ItemMenu';
import React, {memo, useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import styles from './styles';
import {IListMenu} from '../types';

const sampleData = [
  {
    title: 'Pear Salad',
    description:
      'Reid’s Orchard Pears / Bitter Greens / Granola / Firefly Farms Black and Blue / Pine Nut Vinaigrette',
    price: '$ 11.50',
    id: 1,
  },
  {
    title: 'BBQ Shrimp',
    description: 'Creamy Polenta / Braised Collards',
    price: '$ 15',
    id: 2,
  },
  {
    title: 'Ricotta Gnud',
    description:
      'Marinated Black Trumpet Mushrooms / Md Lump Crab / Brown Butter Vinaigrette',
    price: '$ 12.40',
    id: 3,
  },
];

const ListMenu = () => {
  const renderItem = useCallback(({item}: ListRenderItemInfo<IListMenu>) => {
    return (
      <ItemMenu
        title={item?.title}
        description={item?.description}
        price={item?.price}
      />
    );
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.customContent}
      data={sampleData}
      renderItem={renderItem}
      keyExtractor={({id}) => String(id)}
    />
  );
};

export default memo(ListMenu);
