const TodoData = (props) => {
    const { todoList, deleteItem } = props;
    const handleClick = (id) => {
        deleteItem(id)
    }
    return (
        <div className="todo-data">
            {
                todoList.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.name}
                            <button
                                onClick={() => handleClick(item.id)}
                            >Delete</button>
                        </div>
                    )
                })
            }
            {/* <div>
                {JSON.stringify(props.todoList)}
            </div> */}

        </div >
    )
}
export default TodoData;