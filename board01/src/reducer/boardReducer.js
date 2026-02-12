export function boardReducer(state, action) {
    switch (action.type) {
        case "created": {
            return [{
                id: action.id,
                title: action.title,
                content: action.content,
                date: action.date,
                writer: action.writer,
                category:action.category
            }, ...state]
        }
        case "updated": {
            return state.map((item) => item.id === action.id ? { ...item, title: action.title, content: action.content, category: action.category } : item)
        }
        case "deleted": {
            return state.filter((item) => item.id !== action.id)
        }
    }

}