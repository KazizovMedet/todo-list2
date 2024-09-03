import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";
import {getTodos} from "./redux/action/todoAction";
import {useDispatch} from "react-redux";
import UserPage from "./Pages/UserPage";
import SingInPage from "./Pages/SingInPage";
import SignUpPage from "./Pages/SignUpPage";
import {ProtectedRoute} from "./Components/ProtectedRoute/ProtectedRoute";
import {isAuth} from "./Components/Lib/helper";
import {getMyUser} from "./redux/action/userAction";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, []);

  // useEffect(() => {
  //   if (isAuth()) {
  //     dispatch(getMyUser())
  //   }
  // }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={true} children={<HomePage/>}/>
        }
      />
      <Route path="/users" element={<UserPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/sign-in" element={<SingInPage/>}/>
    </Routes>
  );
};

export default App;