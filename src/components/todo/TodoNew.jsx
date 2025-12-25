const TodoNew = (props) => {

    console.log(">>>>check props", props)
    const { addNewToDo } = props;
    //addNewToDo("Henry")
    return (
        <div className='todo-new'>
            <input type="text"></input>
            <button>Add</button>
        </div>
    )
}
export default TodoNew;