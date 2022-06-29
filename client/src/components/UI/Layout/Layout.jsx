import React from 'react';
import cn from 'classnames';

import UseTheme from '../../../hooks/useTheme';

function Layout({ children }) {
  const { isDark } = UseTheme();// кастомных хук
  return (
    <div className={cn('layout', {
      dark: isDark,
    })}
    >
      {children}
    </div>
  );
}

export default Layout;
