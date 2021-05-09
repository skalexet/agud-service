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
                <Link to={`/products/${id}`}>
                    <img src={img} alt={img} />
                </Link>
                <small>${price}</small>
                <Link to={`/products/${id}`}>
                    <span>See more</span>
                </Link>
                <div onClick={() => addToCart(id)} className='add-btn'>
                    Add To The Cart
                </div>
            </article>
        </>
    )
}

export default Product
