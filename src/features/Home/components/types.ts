import {IRestaurantResponse, IMenusOptions} from '../api/model';

export interface IItemMenuProps {
  name: string;
  description: string;
  price: string;
}

export interface IListMenu {
  name: string;
  description: string;
  price: string;
}

export interface IListMenuProps {
  listMenuInfo: Array<IListMenu>;
}

export interface IMenuProps {
  infoRestaurant: IRestaurantResponse;
}
export interface IScene {
  key: string;
  title: string;
  options: Array<IMenusOptions>;
}
