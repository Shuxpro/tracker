import React, {ReactElement} from 'react';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import {useStyles} from './styles';

interface ButtonProps {
  text?: string;
  onPress?: () => void;
  children?: ReactElement;
  buttonStyle?: StyleProp<ViewStyle>;
}

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  children,
  buttonStyle,
}) => {
  const styles = useStyles();

  return (
    <Pressable onPress={onPress} style={buttonStyle || styles.button}>
      {text ? <Text style={styles.text}>{text}</Text> : children}
    </Pressable>
  );
};
