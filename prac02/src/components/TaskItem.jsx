const TaskItem = ({id,text,handleDeleteTask})=>{

    return(<>
        <p>{id} / {text}</p>
        <button type="button" onClick={()=>handleDeleteTask(id)}>삭제</button>
    </>)
}

export default TaskItem;