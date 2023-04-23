export const darkTheme = {
  title: 'dark',

  colors: {
    primary: '#0069d9',
    secondary: '#FF5722',
    disabled: '#323238',

    success: '#22c55e',
    danger: '#F75A68',

    elements: '#1E1E1E',
    border: '#29292E',
    borderLight: '#29292E',

    color: '#C4C4CC',
    white: '#F5F8FA',
    background: '#121214',

    zinc: {
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
  } as const,

  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
  } as const,

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
    '4xl': '64px',
  } as const,

  radius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  } as const,
}
