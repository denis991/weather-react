import { useContext } from 'react';
import ThemeContext from '../providers/ThemeProvider';

function UseTheme() {
  const value = useContext(ThemeContext);
  return value;
}

export default UseTheme;
