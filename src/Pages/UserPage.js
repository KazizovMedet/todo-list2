import React, {useEffect} from 'react';
import Header from "../Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/action/userAction";

const UserPage = () => {
  const dispatch = useDispatch()
  const users = useSelector(s => s.user.users)

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  return (
    <div>
      <Header />
      Users page
      <div className={'container'}>
        {
          users.map(user =>
          <div>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
          </div>
          )
        }

      </div>
    </div>
  );
};

export default UserPage;