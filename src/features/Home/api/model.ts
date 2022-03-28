export interface IMenusOptions {
  name: string;
  description: string;
  price: string;
}
interface IMenus {
  name: string;
  options: Array<IMenusOptions>;
}

export interface IRestaurantResponse {
  name: string;
  menus: Array<IMenus>;
}
