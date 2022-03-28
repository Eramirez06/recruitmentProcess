import {Keyboard} from 'react-native';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

const instance: AxiosInstance = axios.create({
  baseURL: Config.BASE_URL,
});

const dispatchRequest = async (
  request: AxiosRequestConfig,
  hideKeyboard: boolean = true,
) => {
  instance.defaults.headers!.common['Content-Type'] = 'application/json';
  instance.defaults.headers!.common['X-API-KEY'] = Config.API_KEY;
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

export default dispatchRequest;
