import React, { useContext, useReducer, useEffect } from 'react'
import reducer from '../reducer';

const CartContext = React.createContext();

const initialState = {
    cart: [],
    total: 0,
    amount: 0,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
        getTotals();
    }
    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
        getTotals();
    }
    const fetchData = async () => {
        dispatch({ type: 'DISPLAY_ITEMS', payload: state.cart })
    }
    const getTotals = () => {
        dispatch({ type: 'GET_TOTALS', payload: state });
    }
    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
        getTotals();
    }
    const addToCart = (id) => {
        for (let item of state.cart) {
            if (item.id === id) {
                toggleAmount(id, 1);
                getTotals();
                return;
            }
        }

        dispatch({ type: 'ADD_TO_CART', payload: { id } });
        getTotals();
    }

    useEffect(() => {
        fetchData();
        getTotals();
    }, []);

    return (
        <CartContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                toggleAmount,
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(CartContext);
}

export { CartContext, CartProvider }
