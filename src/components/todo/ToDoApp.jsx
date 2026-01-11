import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';
const ToDoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "tex" },
        // { id: 2, name: "bcvcc" },
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
    const deleteItem = (id) => {
        const newToDo = todoList.filter(item => item.id !== id)
        setTodoList(newToDo);
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewToDo={addNewToDo}
            />
            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteItem={deleteItem}
                />
                :
                <div className='todo-image'>
                    <img src={reactLogo} />
                </div>
            }

        </div>
    )
}
export default ToDoApp;