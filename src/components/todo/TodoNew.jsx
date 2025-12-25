import { useState } from "react";

const TodoNew = (props) => {

    //useState hook 
    const [valueInput, setValueInput] = useState("Henry")
    // const valueInput = "Henry";
    const { addNewToDo } = props;
    //addNewToDo("Henry")
    const handleClick = () => {
        console.log(">>>>check valueInput", valueInput)
    }
    const handleOnchange = (name) => {
        //console.log(">>>>handleOnChange", name)
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)}
            ></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                my text input is  = {valueInput}
            </div>
        </div >
    )
}
export default TodoNew;