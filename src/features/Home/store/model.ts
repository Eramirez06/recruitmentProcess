type THome = {
  id?: number | null;
};

export interface IHomeState {
  isLoading: boolean;
  data: THome;
}

export type IDataHomeRequest = {
  userName: string;
  password: string;
};

export interface IRequestHome {
  type: string;
  payload: IDataHomeRequest;
}
