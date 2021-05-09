import React from 'react'
import { useGlobalContext } from '../contexts/CartContext'
import { FaAngleUp } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'

function CartItem({ id, img, title, price, amount }) {
    const { remove, toggleAmount } = useGlobalContext();

    return (
        <div>
            <article className='cart-item'>
                <img src={img} alt={title} />
                <div>
                    <h4>{title}</h4>
                    <h4 className='item-price'>${price}</h4>
                    <div className='item-controller'>
                        <button className='remove-btn' onClick={() => remove(id)}>
                            remove
                        </button>
                        <div>
                            <FaAngleUp onClick={() => toggleAmount(id, 1)} />
                            <p className='amount'>{amount}</p>
                            <FaAngleDown onClick={() => toggleAmount(id, -1)} />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default CartItem
