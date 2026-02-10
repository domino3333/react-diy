
export default function reducer(state, action) {

    switch (action.type) {
        case "create": {
            return [...state, {
                id: action.id,
                content: action.content,
                date: action.date
            }]
        }
        case "update": {
            return state.map((item) => item.id === action.id ?
                { ...item, content: action.content, date: action.date } :
                (item))
        }
        case "delete": {
            
            return state.filter((item)=>item.id !== action.id)
        }
        default:
            return state;

    }

}