import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAction} from '@reduxjs/toolkit';
import {IDataHomeRequest, IHomeState} from './model';

const initialState: IHomeState = {
  isLoading: false,
  data: {},
};

export const persistConfigHome = {
  key: 'home',
  storage: AsyncStorage,
};

export const request = createAction<IDataHomeRequest>('home/request');

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthorized: true,
      };
    },
    error: state => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(request, state => {
      state.isLoading = true;
    });
  },
});

export const {success, error} = homeSlice.actions;

export default homeSlice.reducer;
