import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import App from '../App'
import { AppContext } from '../contexts/AppContext'


function Home() {
    const context = useContext(AppContext);
    let { products, categories, handleChange } = context;

    return (
        <div>
            Categories:
            {categories.map((category, i) => {
                return (
                    <div key={i} onClick={() => handleChange('current', category)}>
                        <Link to='/products'>
                            <h2>{category}</h2>
                        </Link>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Home
