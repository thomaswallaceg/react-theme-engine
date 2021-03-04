import { Storage } from './storage-helper';
import defaultTheme from 'assets/themes/default.module.scss';
import darkTheme from 'assets/themes/dark.module.scss';

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

        Storage.store('pageTheme', themeName);
    }

    static loadStartupTheme() {
        this.loadTheme(this.getCurrentTheme() || THEMES.DEFAULT);
    }

    static getCurrentTheme() {
        return Storage.retrieve('pageTheme');
    }
}

ThemeProvider.loadStartupTheme();
  
export { ThemeProvider, THEMES };
