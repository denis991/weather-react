import React, { useContext } from 'react';
import Search from '../Search/Search';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/User';
import styles from './Navbar.module.css';

function Navbar() {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const renderLogout = () => (
    <button className={styles.logout_btn} type="button" onClick={handleLogout}>
      Logout
    </button>
  );
  return (
    <>
      <div className={styles.nav_div}>
        <div className={styles.home_div}>
          <Link className={styles.text_h}to="/">Home</Link>
          <Link className={styles.text_h}to="/anime">Anime</Link>
          <Link className={styles.text}to="/auth">Sign </Link>
          <Link className={styles.text}to="/to-do">to-do</Link>
          <Link className={styles.text}to="/weather">Weather</Link>
          {user ? renderLogout() : null}
        </div>
        <div className={styles.search_div}>
          <h3>Genre</h3>
          <Search />
        </div>
      </div>
    </>
  );
}

export default Navbar;
