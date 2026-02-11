
export default function reducer(state,action){
    switch(action.type){
        case 'create':{
            return [...state,{
                id:action.id,
                name:action.name,
                singer:action.singer,
                genre:action.gernre
            }]
        }

        case 'update':{
            return state.map((item)=> item.id===action.id ? {
                ...item,
                name:action.name,
                singer:action.singer,
                genre:action.genre
            }:item)
        }
        case 'delete':{
            return state.filter((item)=> item.id!==action.id)
        }

    }

} 