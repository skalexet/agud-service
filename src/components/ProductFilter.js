import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

function ProductFilter() {
    const context = useContext(AppContext);
    let { categories, current, handleChange, maxPrice, price } = context;

    function submitChanges(event) {
        handleChange(event.target.name, event.target.value);
        console.log(event.target.name, event.target.value)
    }

    return (
        <>
            <div className='filter'>
                <label>Category</label>
                <select name="current" value={current} onChange={submitChanges}>
                    <option value='all'>all</option>
                    {categories.map((category, i) => {
                        return <option key={i} value={category}>{category}</option>
                    })}
                </select>
            </div>
            <div className='filter'>
                <label>Price: ${price}</label>

                <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    name='maxPrice'
                    value={price}
                    onChange={submitChanges}
                />
            </div>
        </>
    )
}

export default ProductFilter
