import {Dimensions, PixelRatio, Platform} from 'react-native';
import Config from 'react-native-config';

const dimensionType = Platform.OS === 'ios' ? 'screen' : 'window';
export const screen = Dimensions.get(dimensionType);

export const scaleWidth = (givenWidth: number): number => {
  let widthValue = (givenWidth * 100) / Number(Config.BASE_WIDTH);
  widthValue = widthValue / 100;
  widthValue = screen.width * widthValue;
  return PixelRatio.roundToNearestPixel(widthValue);
};
export const scaleHeight = (givenHeight: number): number => {
  let heightValue = (givenHeight * 100) / Number(Config.BASE_HEIGHT);
  heightValue = heightValue / 100;
  heightValue = screen.height * heightValue;
  return PixelRatio.roundToNearestPixel(heightValue);
};
