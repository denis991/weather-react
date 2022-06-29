import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/auth')
      .then((res) => res.json())
      .then((res) => {
        console.log('fetch');
        setUser(res);
      })
      .finally(() => setLoading(false));
    return () => {};
  }, []);

  const handleLogout = () =>
    fetch('/logout')
      .then(() => {
        setUser(null);
      })
      .catch(console.log);

  const handleAuth = (loginToggle, body) =>
    fetch(loginToggle ? '/login' : '/register', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch(console.log);

  return (
    <UserContext.Provider
      value={{
        user,
        handleAuth,
        handleLogout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
