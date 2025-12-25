const TodoNew = (props) => {

    console.log(">>>>check props", props)
    const { addNewToDo } = props;
    //addNewToDo("Henry")
    const handleClick = () => {
        alert("click me")
    }
    const handleOnchange = (name) => {
        console.log(">>>>handleOnChange", name)
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
        </div >
    )
}
export default TodoNew;