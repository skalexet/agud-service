import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

function Product({ id, title, img, price }) {
    const context = useContext(CartContext);
    const { addToCart } = context;

    return (
        <>
            <article className='product'>
                <strong>{title}</strong>
                <img src={img} alt={img} />
                <small>${price}</small>
                <Link to={`/products/${id}`}>
                    <span>See more</span>
                </Link>
                <strong onClick={() => addToCart(id)}>Add To The Cart</strong>
            </article>
        </>
    )
}

export default Product
