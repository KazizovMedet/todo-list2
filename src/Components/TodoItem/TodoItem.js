import React, {useState} from 'react';
import Modal from "../Modal/Modal";
import {deleteTodo} from "../../redux/action/todoAction";
import {useDispatch} from "react-redux";

const TodoItem = ({todo}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo))
  }

  return (
    <div
      key={todo.id}
      className={'' +
        'd-flex align-items-center ' +
        'justify-content-between ' +
        'mt-3 border border-secondary ' +
        'p-4 rounded'
      }
    >
      <h2>{todo.title}</h2>
      <div className={'d-flex align-items-center'}>
        <p>{todo.completed ? 'Completed' : 'In progress'}</p>
        <img style={{width: '155px', objectFit: 'contain', margin: '0 20px'}} src={todo.asset} alt=""/>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={'btn btn-warning ms-4'}>Edit
        </button>
        <button onClick={() => handleDelete(todo)} className={'btn btn-danger ms-4'}>
          Delete
        </button>
        {isOpen &&
          <Modal todoData={todo} setIsOpen={setIsOpen} />
        }
      </div>
    </div>
  );
};

export default TodoItem;