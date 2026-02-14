

export default function todoReducer(state, action) {
    switch (action.type) {
        case 'created': {
            return [{

            }, ...state]
        }
        case 'updated':{
            return state.map(()=>)
        }
        case 'delete':{
            return state.filter(()=>)
        }

    }

}