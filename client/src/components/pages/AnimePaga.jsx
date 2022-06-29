import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from '../../providers/ThemeProvider';
import TodoList from '../TodoList';
import Anime from '../UI/Anime/Anime';
import AuthRoute from '../UI/AuthRoute/AuthRoute';
import Layout from '../UI/Layout/Layout';
import UserForm from '../UI/UserForm/UserForm';
import Weather from '../Weather';
import './todo.module.css';
const AnimePaga = () => {
  return (
    <>
      <Routes>
        <Route path="/anime" element={<Anime />} />
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <UserForm />
            </AuthRoute>
          }
        />
        <Route
          path="/to-do"
          element={
            <ThemeProvider>
              <Layout>
                <TodoList />
              </Layout>
            </ThemeProvider>
          }
        />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default AnimePaga;
