import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      white: string,
      disabled: string,

      border: string,
      borderLight: string,
      color: string,
      background: string,
    }

    radius: {
      sm: string,
      md: string,
      lg: string,
    }
  }
}
