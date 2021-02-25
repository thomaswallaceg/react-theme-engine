import defaultTheme from './default.module.scss';
import darkTheme from './dark.module.scss';

const THEMES = {
    DEFAULT: defaultTheme,
    DARK: darkTheme,
}

class ThemeProvider {
    static loadTheme(theme) {
        const colors = Object.keys(defaultTheme);
        colors.forEach((key) => (
            document.documentElement.style.setProperty(`--${key}`, theme[key] || defaultTheme[key])
        ));
        document.documentElement.style.setProperty('background-color', theme.background || defaultTheme.background)
    }
}
  
export { ThemeProvider, THEMES };
