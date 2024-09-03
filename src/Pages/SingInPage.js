import React from 'react';
import Header from "../Components/Header/Header";
import { useForm } from "react-hook-form";
import {signIn} from "../redux/action/userAction";
import {useDispatch} from "react-redux";


const SingInPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()

  const handleSignIn = (data) => {
    dispatch(signIn(data))
  }

  return (
    <div>
      <Header/>
      <form
        className={'sign-in-form'}
        onSubmit={handleSubmit((data) => handleSignIn(data))}
      >
        <input
          {...register("phone_number")}
          className={'form-control'}
          type="text"
          placeholder={'Phone number'}
        />
        <input
          {...register("password")}
          className={'form-control'}
          type="password"
          placeholder={'Password'}
        />
        <button className={'btn btn-primary'}>Submit</button>
      </form>
    </div>
  );
};

export default SingInPage;