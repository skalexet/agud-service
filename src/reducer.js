import products from './data';

const reducer = (state, action) => {

    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE') {
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload
            ),
        }
    }
    if (action.type === 'GET_TOTALS') {

        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        }, { total: 0, amount: 0 });
        total = parseFloat(total.toFixed(2));

        return { ...state, total, amount }
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload }
    }
    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                return { ...cartItem, amount: cartItem.amount + action.payload.type }
            }
            return cartItem;
        }).filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
    }
    if (action.type === 'ADD_TO_CART') {
        for (let product of products) {
            if (product.id === action.payload.id) {
                state.cart.push(product);
                return state
            }
        }

    }

    return state
}

export default reducer
