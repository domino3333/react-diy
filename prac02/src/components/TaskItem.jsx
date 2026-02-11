import { useContext } from "react";
import { StateContext } from "../context/StateContext";


const TaskItem = ({ id, content }) => {

    const { dispatch } = useContext(StateContext);

    function deleteState(id) {
        dispatch({
            type: 'delete',
            id: id
        })
    }



    return (<>
        <p>{id} / {content}</p>
        <button type="button" onClick={() => deleteState(id)}>삭제</button>
    </>)
}

export default TaskItem;