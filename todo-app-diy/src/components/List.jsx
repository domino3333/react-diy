import TodoItem from "./TodoItem";
const List = ({todos}) => {

    return (<>
        <div className="List">
            <div>{todos.map((element) => {
                return (<TodoItem key={element.id} {...element}/>)
            })}
            </div>

        </div>
    </>)
}

export default List;