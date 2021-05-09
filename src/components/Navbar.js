import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../contexts/CartContext'
 

function Navbar() {
    const { amount } = useGlobalContext();

    return (
        <nav>
            <div className='nav'>
                <h3>AGUD <small>production</small></h3>

                

                <div className='nav-container'>
                    <Link to='/'>
                        <strong>HOME</strong>
                    </Link>

                    <Link to='/products'>
                        <strong>PRODUCTS</strong>
                    </Link>

                    <Link to='/cart'>
                        <strong>CART</strong>
                    </Link>


                    Amount in Cart {amount}
                    <div className='amount-container'>
                        <p className='total-amount'>{}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
