import theme from 'theme';
import {Toast} from 'native-base';

interface IToastProps {
  title: string;
  duration?: 4000;
}
export const showToast = ({title, duration}: IToastProps) => {
  Toast.show({
    title,
    duration: duration || 2000,
    style: {
      backgroundColor: theme.colors.title,
    },
  });
};
