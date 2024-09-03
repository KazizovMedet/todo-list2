import React, {useEffect, useState} from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {editTodo, getTodo} from "../../redux/action/todoAction";

const Modal = ({todoData, setIsOpen}) => {
  const todo = useSelector(s => s.todo.todo)
  const [edit, setEdit] = useState({})
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editTodo(edit))
    setIsOpen(false)
  }

  useEffect(() => {
    if (todo?.id){
      setEdit(todo)
    }
  },[todo])

  useEffect(() => {
    dispatch(getTodo(todoData.id))
  }, [todoData.id]);

  return (
    <div className={'custom-modal'}>
      <div className={'inner-modal'}>
        <form className={'modal-form'} onSubmit={handleSubmit}>
          <input
            onChange={e => setEdit({...edit, title: e.target.value})}
            defaultValue={edit?.title}
            className={'form-control'} type="text"
          />
          <input
            onChange={e => setEdit({...edit, required: e.target.checked}) }
            defaultChecked={edit?.required}
            type="checkbox"
          />
          {/*<input className={'form-control'} type="file"/>*/}
          <button className={'btn btn-primary'}>save changes</button>
          <img style={{maxHeight: '220px', width: '100%', objectFit: 'contain'}} src={edit.asset} alt=""/>
        </form>
      </div>
    </div>
  );
};

export default Modal;