import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'dark',
  colors: {
    ...chronoblogTheme.color,
    text: '#eaeaea',
    background: '#0e0f17',
    muted: '#161b1d',
    link: '#3d7e9a',
    primary: '#f5cd79',
    secondary: '#f7d794',
    modes: {
      ...chronoblogTheme.colors.modes
    }
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 8,
    button: 8,
    search: 8,
    code: 8,
    img: 8,
    authorBanner: 8
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
