import {Keyboard} from 'react-native';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'test/api/',
});

const dispatchRequest = async (
  request: AxiosRequestConfig,
  hideKeyboard: boolean = true,
) => {
  instance.defaults.headers!.common['Content-Type'] = 'application/json';
  instance.defaults.headers!.common!.Accept = 'application/json';

  try {
    if (hideKeyboard) {
      Keyboard.dismiss();
    }
    const resource = await instance(request);
    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};

export {dispatchRequest};
