
const TodoItem = ({ id, content, date }) => {


    return (<>
        <div className="TodoItem">
            <p>{id}</p>
            <p>{content}</p>
            <p>{date}</p>

        </div>
    </>)

}

export default TodoItem;