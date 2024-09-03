import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Header from "../Components/Header/Header";
import {useDispatch} from "react-redux";
import {registerUser} from "../redux/action/userAction";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)

  const handleSignIn = (data) => {
    dispatch(registerUser(data))
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
          {...register("username")}
          className={'form-control'}
          type="text"
          placeholder={'Username'}
        />
        <div style={{width: '100%'}}>
          <input
            {...register("password")}
            className={'form-control'}
            type={showPassword ? 'text' : 'password'}
            placeholder={'Password'}
          />
          <button type={'button'} onClick={() => setShowPassword(!showPassword)}>Show</button>
        </div>
        <button className={'btn btn-primary'}>Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;