import {ReactNode} from 'react';
import {TextProps} from 'react-native';

export type TTypographyVariants =
  | 'title'
  | 'subTitle'
  | 'description'
  | 'small';
export interface ITypographyProps extends TextProps {
  variant?: TTypographyVariants;
  children?: ReactNode;
}
