const TaskItem = ({id,content,deleteState})=>{

    return(<>
        <p>{id} / {content}</p>
        <button type="button" onClick={()=>deleteState(id)}>삭제</button>
    </>)
}

export default TaskItem;