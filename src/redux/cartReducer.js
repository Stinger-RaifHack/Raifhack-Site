const ADD_PRODUCT = 'ADD_PRODUCT';
const DEL_PRODUCT = 'DEL_PRODUCT';
const ADD_COUNT_PRODUCT = 'ADD_COUNT_PRODUCT';
const SUBTRACT_COUNT_PRODUCT = 'SUBTRACT_COUNT_PRODUCT';



let initialState = {
    items: [],
    amount: 0,
};

const cartReducer = (state = initialState, action) => {
    debugger;
    if (action.type === SUBTRACT_COUNT_PRODUCT && state.items[action.id].count===1){
        action.type = DEL_PRODUCT;
    }

    switch (action.type) {
        case ADD_PRODUCT: {
            let items = [...state.items];
            for (let i=0; i<items.length; i++) {
                if (items[i].idItem === action.idItem) {
                        items[i].count++;
                    return {
                        ...state,
                        items: items
                    }
                }
            }

            let item = {
                // id: action.id,
                idItem: action.idItem,
                title: action.title,
                img: action.image,
                price: action.price,
                count: 1,
            };
            let amount = state.amount
            amount++
            return {
                ...state,
                items: [...state.items, item],
                amount: amount
            };
        }

        case DEL_PRODUCT: {

            let items = [...state.items];
            items.splice(action.id, 1);
            let amount = state.amount
            amount--
            return {
                ...state,
                items: items,
                amount: amount
            }
        }

        case SUBTRACT_COUNT_PRODUCT: {
            let items = [...state.items];
            items[action.id].count--;
            return {
                ...state,
                items: items
            }
        }

        case ADD_COUNT_PRODUCT: {
            let items = [...state.items];
            items[action.id].count++;
            return {
                ...state,
                items: items
            }
        }

        default:
            return state;
    }
}

const setProduct = (idItem, title, image, price) => ({type: ADD_PRODUCT, idItem, title, image, price});

const deleteProduct = (id) => ({type: DEL_PRODUCT, id});

const addCountItem = (id) => ({type: ADD_COUNT_PRODUCT, id});

const subtractCountItem = (id) => ({type: SUBTRACT_COUNT_PRODUCT, id});




export const addItem = (idItems, title, img, price) => (dispatch) => {
    return dispatch(setProduct(idItems, title, img, price));
}

export const delItem = (id) => (dispatch) => {
    return dispatch(deleteProduct(id));
}

export const addCount = (id) => (dispatch) => {
    return dispatch(addCountItem(id));
}

export const subtractCount = (id) => (dispatch) => {
    return dispatch(subtractCountItem(id));
}



export const getTotalPrice = () => {

}

export default cartReducer;