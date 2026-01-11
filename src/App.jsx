import './components/todo/todo.css';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  // todoList.push(newToDo)
  // setTodoList(todoList)
  //addNewToDo()
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
