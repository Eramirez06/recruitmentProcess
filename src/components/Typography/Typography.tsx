import React, {FC} from 'react';
import {Text} from 'react-native';
import {ITypographyProps} from './types';
import styles from './styles';

const Typography: FC<ITypographyProps> = ({children, variant, style}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'title':
        return styles.title;
      case 'subTitle':
        return styles.subTitle;
      case 'description':
        return styles.description;
      case 'small':
        return styles.small;
      default:
        return styles.regularTextBody;
    }
  };

  return <Text style={[getVariantStyle(), style]}>{children}</Text>;
};

export default Typography;
