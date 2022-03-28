import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAction} from '@reduxjs/toolkit';
import {IHomeState} from './model';

const initialState: IHomeState = {
  isLoading: false,
  data: {
    name: 'tes',
    menus: [
      {
        name: 'test',
        options: [
          {
            name: '',
            description: '',
            price: '',
          },
        ],
      },
    ],
  },
};

export const persistConfigHome = {
  key: 'home',
  storage: AsyncStorage,
};

export const request = createAction('home/request');

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    success: (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
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
