import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      blueLow: string,
      white: string,

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
