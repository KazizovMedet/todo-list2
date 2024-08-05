import React, {useEffect, useState} from 'react';
import TodoItem from "./Components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: '',
    required: false,
    isDone: false
  })

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('todos'))){
      const initialTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(initialTodos )
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {...todo, id: Math.random() * 100}
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    setTodos([...todos, newTodo])
  }

  const handleDone = (todo) => {
    const newData = {...todo, isDone: true}
    setTodos(
      todos.map(el => el.id === newData.id ? newData : el).sort((a,b) => a.isDone > b.isDone ? 1 : -1)
    )
    localStorage.setItem('todos', JSON.stringify(todos.map(el => el.id === newData.id ? newData : el)
      .sort((a,b) => a.isDone > b.isDone ? 1 : -1)
    ))
  }

  const handleEdit = () => {

  }

  return (
    <div className={'container'}>
      <h2>My Todo List</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputEmail1" className="form-label">Todo task</label>
          <input onChange={(e) => setTodo({...todo, title: e.target.value})}
                 type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 form-check">
          <input onChange={(e) => setTodo({...todo, required: e.target.checked})}
                 type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Required</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className={'mt-3'}>
        {
          todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDone={handleDone}
          />
          )
        }
      </div>
    </div>
  );
};

export default App;
