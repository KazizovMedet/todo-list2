import React, {useState} from 'react';

const TodoItem = ({todo, handleDone}) => {
  const [edit, setEdit] = useState(false)
  return (
    <div className={`mb-3 border ${todo.isDone ? 
      'border-success' : 'border-primary'} p-2 rounded`}>
      <div className={'d-flex justify-content-between'}>
        <h4 style={{width: '250px'}}>{todo.title}</h4>
        <input disabled={todo.isDone} type="checkbox"
               defaultChecked={todo.required}
        />

        <button className="btn btn-primary" disabled={todo.isDone}
                onClick={() => setEdit(!edit)}>Edit</button>
        <button onClick={() => handleDone(todo)} disabled={todo.isDone} className="btn btn-success">Done</button>
      </div>
      {edit &&
        <div>

        </div>
      }
    </div>
  );
};

export default TodoItem;