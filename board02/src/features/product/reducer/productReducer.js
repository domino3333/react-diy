

export default function productReducer(state, action) {
    switch (action.type) {
        case 'created': {
            return [{
            id:action.id,
            name:action.name,
            price:action.price,
            quantity:action.quantity
            }, ...state]
        }
        

    }

}