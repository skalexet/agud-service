import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../contexts/CartContext'
import { FaCartArrowDown } from 'react-icons/fa'

function Navbar() {
    const { amount } = useGlobalContext();

    return (
        <nav>
            <div className='nav'>
                <div className='title'>
                    <h3>AGUD <small>production</small></h3>
                </div>

                <div className='nav-container'>
                    <Link to='/' className='nav-option'>
                        <strong>HOME</strong>
                    </Link>

                    <Link to='/products' className='nav-option'>
                        <strong>PRODUCTS</strong>
                    </Link>

                    <Link to='/cart' className='nav-option'>
                        <strong>CART</strong>
                    </Link>

                    <div className='amount-container'>
                        <Link to='/cart'>
                            <p className='total-amount'><FaCartArrowDown /> {amount}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
