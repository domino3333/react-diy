import TaskItem from "./TaskItem";

const List = ({tasks,deleteState})=>{
    

    return(<>
        {tasks.map((task)=>
            <TaskItem key={task.id}{...task}deleteState={deleteState}/>
        )}
        
    </>)
}

export default List;