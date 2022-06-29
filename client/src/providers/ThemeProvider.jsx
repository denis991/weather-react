import { createContext, useMemo, useState } from 'react';

// type TypeSetState<T> = Dispatch<SetStateAction<T>>; //для ts
// interface IContext{
//   type: 'light'|'dark';
//   setType: TypeSetState<string>;
// }

const ThemeContext = createContext({ isDark: false });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
