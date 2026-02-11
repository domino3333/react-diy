import { StateContext } from "../context/StateContext";
import TaskItem from "./TaskItem";
import { useContext } from "react";


const List = () => {

    const { state } = useContext(StateContext)

    return (<>
        {state.map((task) =>
            <TaskItem key={task.id}{...task} />
        )}

    </>)
}

export default List;