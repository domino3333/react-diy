

export default function todoReducer(state, action) {
    switch (action.type) {
        case 'created': {
            return [{
            id:action.id,
            name:action.name,
            price:action.price,
            quantity:action.quantity
            }, ...state]
        }
        case 'updated':{
        }
        case 'delete':{
        }

    }

}