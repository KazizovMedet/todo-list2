import React from 'react';
import Header from "../Components/Header/Header";
import {useSelector} from "react-redux";

const DetailPage = () => {
  const todos = useSelector(s => s.todo.todos)

  return (
    <div>
      <Header/>

    </div>
  );
};

export default DetailPage;