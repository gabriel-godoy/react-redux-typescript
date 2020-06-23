import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { HomeOutline } from '@styled-icons/typicons/HomeOutline';
import { LogInCircle } from '@styled-icons/boxicons-solid/LogInCircle';
import { Surprise } from '@styled-icons/fa-solid/Surprise';
import { logout } from './../../redux/actions/userActions';
import { TInitialState } from './../../redux/store/initialState/initialState';
import { TUserState } from './../../redux/store/initialState/userState';

type OwnProps = {};

type Props = TReduxStateProps & TReduxDispatchProps & OwnProps;

const Header: React.FC<Props> = ({ user, logout }) => {
  return (
    <div className={styles.containerHeader}>
      <div className='container'>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink
              exact
              activeClassName={styles.menuItemActive}
              className={styles.menuItemLink}
              to='/'
            >
              <div className={styles.menuItemIcon}>
                <HomeOutline />
              </div>
              Home
            </NavLink>
          </li>

          {user.details.isLoggedIn && (
            <li className={styles.menuItem}>
              <NavLink
                className={styles.menuItemLink}
                activeClassName={styles.menuItemActive}
                to='/extra-content'
              >
                <div className={styles.menuItemIcon}>
                  <Surprise />
                </div>
                Content for logged in users
              </NavLink>
            </li>
          )}

          <li className={styles.menuItem}>
            {!user.details.isLoggedIn ? (
              <NavLink
                activeClassName={styles.menuItemActive}
                className={styles.menuItemLink}
                to='/login'
              >
                <div className={styles.menuItemIcon}>
                  <LogInCircle />
                </div>
                Login
              </NavLink>
            ) : (
              <>
                <span className={styles.userGreeting}>
                  Olá, {user.details.name}
                </span>
                <span className={styles.logOut} onClick={logout}>
                  Logout
                </span>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

type TReduxStateProps = {
  user: TUserState;
};

type TReduxDispatchProps = {
  logout: () => void;
};

const mapStateToProps = (state: TInitialState) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logout })(Header);
