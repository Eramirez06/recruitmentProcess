import {Dimensions, PixelRatio, Platform} from 'react-native';
import Config from 'react-native-config';

const dimensionType = Platform.OS === 'ios' ? 'screen' : 'window';
export const screen = Dimensions.get(dimensionType);

const widthToDp = (givenWidth: number): number => {
  let widthValue = (givenWidth * 100) / Config.BASE_WIDTH;
  widthValue = widthValue / 100;
  widthValue = screen.width * widthValue;
  return PixelRatio.roundToNearestPixel(widthValue);
};
const heightToDp = (givenHeight: number): number => {
  let heightValue = (givenHeight * 100) / Config.BASE_HEIGHT;
  heightValue = heightValue / 100;
  heightValue = screen.height * heightValue;
  return PixelRatio.roundToNearestPixel(heightValue);
};

export const theme = {
  scaleWidth: (units: number): number => widthToDp(units),
  scaleHeight: (units: number): number => heightToDp(units),
};
