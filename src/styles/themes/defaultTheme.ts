export const defaultTheme = {
  title: 'light' as const,

  colors: {
    primary: '#0069d9',
    secondary: '#F25D27',
    disabled: '#bbbbc4',

    success: '#22c55e',
    danger: '#ef4444',

    border: '#bbbbc4',
    borderLight: '#DCE2E5',

    color: '#29292e',
    white: '#F5F8FA',
    background: '#F5F8FA',

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
