import {IRestaurantResponse} from './model';
import database from '@react-native-firebase/database';
import dispatchRequest from 'api';
import {AxiosResponse} from 'axios';
import Config from 'react-native-config';

export const requestRestaurantInfo = (): Promise<AxiosResponse<{}>> =>
  dispatchRequest({
    method: 'get',
    url: `restaurant/${Config.DEFAULT_RESTAURANT_ID}`,
  });

export const requestRestaurantInfoFirebase =
  async (): Promise<IRestaurantResponse> =>
    database()
      .ref(`restaurants/${Config.DEFAULT_RESTAURANT_ID_FIREBASE}`)
      .once('value')
      .then(response => response.val());
