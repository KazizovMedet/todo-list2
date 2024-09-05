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
    if (data.phone_number.includes('+')){
      dispatch(registerUser(data))
      console.log(data)
    } else {
      dispatch(registerUser({...data, phone_number: '+' + data.phone_number}))
    }
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

const gameList = [
  {
    "id": 1,
    "category": {
      "id": 1,
      "title": "шутер"
    },
    "title": "Pubg",
    "description": "PUBG: BATTLEGROUNDS is a battle royale that pits 100 players against each other. Players will land, loot, and survive in a shrinking battleground as they outplay their opponents to become the lone survivor.",
    "logo": "https://capr11.pythonanywhere.com/media/media/games_logo/img-og-pubg_EuAA0PT.jpg",
    "images": [
      {
        "id": 1,
        "file": "https://capr11.pythonanywhere.com/media/media/games_detail_images/%D0%BA%D0%B0%D0%BB%D0%B8%D0%B1%D1%801.jpg"
      },
      {
        "id": 2,
        "file": "https://capr11.pythonanywhere.com/media/media/games_detail_images/ss_f148e1cd44da2972d1b61da1e12b7b3587c1f6a3_KhLFzcR.1920x1080.jpg"
      }
    ],
    "created_date": "2024-08-25T22:52:57.212065+06:00",
    "updated_date": "2024-08-25T22:52:57.212098+06:00"
  },
  {
    "id": 2,
    "category": {
      "id": 1,
      "title": "шутер"
    },
    "title": "jefioenfjnefne",
    "description": "gngojorntgjnwrgjnwrojgnwrognj",
    "logo": "https://capr11.pythonanywhere.com/media/media/games_logo/%D0%BA%D0%B0%D0%BB%D0%B8%D0%B1%D1%801.jpg",
    "images": [
      {
        "id": 1,
        "file": "https://capr11.pythonanywhere.com/media/media/games_detail_images/%D0%BA%D0%B0%D0%BB%D0%B8%D0%B1%D1%801.jpg"
      }
    ],
    "created_date": "2024-09-02T02:20:21.241887+06:00",
    "updated_date": "2024-09-02T02:20:21.241945+06:00"
  },
  {
    "id": 3,
    "category": {
      "id": 1,
      "title": "шутер"
    },
    "title": "wwwwww",
    "description": "wwwwwwwwwww",
    "logo": "https://capr11.pythonanywhere.com/media/media/games_logo/tanki1.jpg",
    "images": [
      {
        "id": 1,
        "file": "https://capr11.pythonanywhere.com/media/media/games_detail_images/%D0%BA%D0%B0%D0%BB%D0%B8%D0%B1%D1%801.jpg"
      }
    ],
    "created_date": "2024-09-02T02:22:44.247346+06:00",
    "updated_date": "2024-09-02T02:22:44.247385+06:00"
  }
]