import { createContext, useState } from 'react';

export const ColorThemeContext = createContext();

export function ColorThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState('green');
  const changeColorTheme = (color) => setColorTheme(color);
  return (
    <ColorThemeContext.Provider value={{ colorTheme, changeColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}
