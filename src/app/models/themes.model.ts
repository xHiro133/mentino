export enum Themes {
    LIGHT = 'light',
    DARK = 'dark',
    CUSTOM = 'custom'
};

export interface Theme {
    white: string;
    black: string;
    primary: string;
    secondary: string;
    accent: string;
    light: string;
    dark: string;
    danger: string;
    success: string;
}