import { useState, useEffect } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.getItem('todos') ? setTodos(JSON.parse(localStorage.getItem('todos'))) : localStorage.setItem('todos', JSON.stringify([]));
    removeCheckedTodos();
  }, []);

  const addNewTodo = () => {
    const newTodos = [...todos, { checked: false, text: newTodo }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const removeCheckedTodos = () => {
    const newTodos = JSON.parse(localStorage.getItem('todos')).filter(todo => !todo.checked);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const onChange = (e) => {
    setNewTodo(e.target.value);
  }

  const onCheck = (e) => {
    const newTodos = todos.map(todo => {
      if (todo.text === e.target.parentElement.nextSibling.innerText) {
        todo.checked = !todo.checked;
      }
      return todo;
    })
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (newTodo.length > 0) {
        addNewTodo();
        setNewTodo('');
      }
    }
  }

  return (
    <div className="flex justify-center">
      <div className='w-96 h-80 flex flex-col border-none pb-4 pt-3'>
        <div className='mb-auto max-h-60 overflow-auto'>
          {todos.map(todo => (
            <div className='mt-1 flex' key={todo.text}>
              <div className='w-4'>
                <input className='border-transparent'
                type="checkbox" checked={todo.checked} onChange={onCheck} />
              </div>
              <div className='w-max ml-1 break-all'>
                {todo.text}
              </div>
            </div>
          ))}
        </div>
        <input className='mt-auto ml-1 appearance-none bg-transparent focus:outline-none focus:placeholder-transparent focus:border-b focus:border-current'
          type="text"
          value={newTodo}
          placeholder='New Todo'
          onChange={onChange}
          onKeyDown={onKeyDown} />
      </div>
    </div>
  )
}

export default Todo