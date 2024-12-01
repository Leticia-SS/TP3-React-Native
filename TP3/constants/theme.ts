import { StyleSheet } from 'react-native';

export const lightTheme = {
  background: '#f0f0f0',
  text: '#140024',
  primary: '#8c52ff',
};

export const darkTheme = {
  background: '#140024',
  text: '#ffffff',
  primary: '#8c52ff',
};

export const createThemedStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    text: {
      color: theme.text,
      fontSize: 18,
      marginVertical: 5,
    },
    primaryText: {
      color: theme.primary,
      fontSize: 18,
      marginVertical: 5,
    },
  });

