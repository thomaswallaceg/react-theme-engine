import defaultTheme from './default.module.scss';
import darkTheme from './dark.module.scss';

const THEMES = {
    DEFAULT: 'default',
    DARK: 'dark',
}

const THEME_COLORS = {
    [THEMES.DEFAULT]: defaultTheme,
    [THEMES.DARK]: darkTheme,
}

class ThemeProvider {
    static loadTheme(themeName) {
        const theme = THEME_COLORS[themeName];
        const colors = Object.keys(defaultTheme);
        colors.forEach((key) => (
            document.documentElement.style.setProperty(`--${key}`, theme[key] || defaultTheme[key])
        ));
        document.documentElement.style.setProperty('background-color', theme.background || defaultTheme.background)

        window.localStorage.setItem('pageTheme', themeName);
    }

    static loadStartupTheme() {
        this.loadTheme(window.localStorage.getItem('pageTheme') || THEMES.DEFAULT);
    }

    static getCurrentTheme() {
        return window.localStorage.getItem('pageTheme');
    }
}

ThemeProvider.loadStartupTheme();
  
export { ThemeProvider, THEMES };
