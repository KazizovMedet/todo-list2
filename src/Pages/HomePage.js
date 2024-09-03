import React, {useState} from 'react';
import Header from "../Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo} from "../redux/action/todoAction";
import Modal from "../Components/Modal/Modal";
import TodoItem from "../Components/TodoItem/TodoItem";
import axios from "axios";
import {useForm} from "react-hook-form";
import {handleUploadImage} from "../Components/Lib/helper";

const HomePage = () => {
  const todos = useSelector(state => state.todo.todos)
  const [isShowForm, setIsShowForm] = useState(false)
  const { register, handleSubmit, resetField } = useForm();
  const [assetUrl, setAssetUrl] = useState('')
  const dispatch = useDispatch()

  const handleSubmitForm = (values) => {
    dispatch(addTodo({...values, asset: assetUrl}))
    setAssetUrl('')
    resetField('title')
    setIsShowForm(false)
  }

  return (
    <div>
      <Header />
      <div style={{width: '750px', margin: '10px auto'}}>
        {isShowForm ?
          <form onSubmit={handleSubmit((data) => handleSubmitForm(data))}>
            <button
              onClick={() => setIsShowForm(false)}
              style={{margin: '0 0 20px auto', display: 'block'}}
              className={'btn btn-danger mb-3'}>X</button>
            <div className={'d-flex gap-2 mb-3'}>
              <input
                {...register("title")}
                className={'form-control'}
              />
              <button type={'submit'} className={'btn btn-primary'}>Add</button>
            </div>
            <input onChange={(e) => handleUploadImage(e, setAssetUrl)} type="file"/>
          </form>
          :
          <button className={'btn btn-success'} onClick={() => setIsShowForm(true)}>Add Todo</button>
        }
        {
          todos.map(todo =>
            <TodoItem todo={todo} key={todo.id}/>
          )
        }
      </div>
    </div>
  );
};

export default HomePage;

// const todosArr = [
//   {
//     id: 1,
//     title: 'Todo 1',
//     completed: false
//   },
//   {
//     id: 2,
//     title: 'Todo 2',
//     completed: false
//   },
//   {
//     id: 3,
//     title: 'Todo 3',
//     completed: false
//   }
// ]