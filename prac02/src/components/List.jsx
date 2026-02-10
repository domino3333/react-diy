import TaskItem from "./TaskItem";

const List = ({tasks,handleDeleteTask})=>{
    

    return(<>
        {tasks.map((task)=>
            <TaskItem key={task.id}{...task}handleDeleteTask={handleDeleteTask}/>
        )}
        
    </>)
}

export default List;