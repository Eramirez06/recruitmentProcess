import {IRestaurantResponse} from '../api/model';

export interface IHomeState {
  isLoading: boolean;
  data: IRestaurantResponse;
}
