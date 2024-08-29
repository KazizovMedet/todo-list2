import React, {useEffect, useState} from 'react';
import Header from "../Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, getTodos} from "../redux/action/todoAction";

const HomePage = () => {
  const todos = useSelector(state => state.todos)
  const [newTodo, setNewTodo] = useState({
    title: '',
    completed: false,
  })
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getTodos(todosArr))
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({...newTodo, id: Math.ceil(Math.random() * 100)}))
    setNewTodo({title: '',
      completed: false,})
  }

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo))
  }

  return (
    <div>
      <Header />
      <div style={{width: '450px', margin: '10px auto'}}>
        <form onSubmit={handleSubmit}>
          <div className={'d-flex gap-2'}>
            <input
              value={newTodo.title}
                onChange={e => setNewTodo({...newTodo, title: e.target.value})}
              className={'form-control'}
              type="text"
            />
            <button type={'submit'} className={'btn btn-primary'}>Add</button>
          </div>
        </form>
        {
          todos.map(todo =>
            <div
              key={todo.id}
              className={'' +
                'd-flex align-items-center ' +
                'justify-content-between ' +
                'mt-3 border border-secondary ' +
                'p-2 rounded'
            }
            >
                <h2>{todo.title}</h2>
              <div className={'d-flex align-items-center'}>
                <p>{todo.completed ? 'Completed' : 'In progress'}</p>
                <button onClick={() => handleDelete(todo)} className={'btn btn-danger ms-4'}>
                  Delete
                </button>
              </div>
            </div>
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