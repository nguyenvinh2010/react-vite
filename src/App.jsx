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
    const newToDo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newToDo])
  }
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // todoList.push(newToDo)
  // setTodoList(todoList)
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
