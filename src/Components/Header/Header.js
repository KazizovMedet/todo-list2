import React from 'react';
import {Link} from "react-router-dom";
import './style.css'
import {isAuth} from "../Lib/helper";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/action/userAction";

const Header = () => {
  const dispatch = useDispatch()
  return (
    <header>
      <h2>
        <Link to={'/'}>Logo from Medets Team!!!</Link>
      </h2>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/users'}>Users</Link>
        {!isAuth() ?
          <>
            <Link to={'/sign-in'}>Sign In</Link>
            <Link to={'/sign-up'}>Sign Up</Link>
          </>
          :
          <div>
            <button
              onClick={() => {
                console.log(123)
                dispatch(logoutUser())
              }}
              className={'btn btn-danger'}>Logout</button>
          </div>
        }
      </nav>
    </header>
  );
};

export default Header;