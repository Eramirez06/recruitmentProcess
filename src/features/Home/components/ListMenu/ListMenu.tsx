import ItemMenu from '../ItemMenu';
import React, {FC, memo, useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {IListMenuProps} from '../types';
import styles from './styles';
import {IListMenu} from '../types';

const ListMenu: FC<IListMenuProps> = ({listMenuInfo}) => {
  const renderItem = useCallback(({item}: ListRenderItemInfo<IListMenu>) => {
    return (
      <ItemMenu
        name={item?.name}
        description={item?.description}
        price={item?.price}
      />
    );
  }, []);

  const keyExtractor = ({name}, index) => `${name}-${index}`;

  return (
    <FlatList
      initialNumToRender={4}
      contentContainerStyle={styles.customContent}
      data={listMenuInfo}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default memo(ListMenu);
