import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "tex" },
    { id: 2, name: "bcv" },
  ])
  const bi = "Henry";
  const age = 25;
  const data = {
    address: "hanoi",
    city: "vietnam"
  }

  const addNewToDo = (name) => {
    alert(`call me ${name}`)
  }

  //addNewToDo()
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewToDo={addNewToDo}
      />
      <TodoData
        name={bi}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} />
      </div>
    </div>
  )
}

export default App
