
export default function reducer(state, action) {

    switch (action.type) {
        case "added": {
            return [...state, {
                id: action.id,
                text: action.text
            }]
        }
        case "deleted": {
            return state.filter((item) => item.id !== action.id)
        }
        case "edited": {
            return state.map((item) => item.id === action.id ? { ...item, text: action.text } : item)
        }

        default: {
            return state;
        }
    }
}