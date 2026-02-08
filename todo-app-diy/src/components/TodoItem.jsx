
const TodoItem = ({ id, content, date }) => {


    return (<>
        <div className="TodoItem">
            <p>{id},{content},{date}</p>

        </div>
    </>)

}

export default TodoItem;