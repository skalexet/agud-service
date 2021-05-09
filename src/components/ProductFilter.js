import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import SearchForm from './SearchForm';

function ProductFilter() {
    const context = useContext(AppContext);
    let {
        categories,
        current,
        handleChange,
        maxPrice,
        minPrice,
        fixedMax,
        fixedMin
    } = context;

    function submitChanges(event) {
        handleChange(event.target.name, event.target.value);
        console.log(event.target.name, event.target.value)
    }

    return (
        <>
            <div className='filter-container'>
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
                    <label>Price range:</label>

                    <input
                        type="number"
                        max={fixedMax}
                        min={fixedMin}
                        name='maxPrice'
                        value={maxPrice}
                        onChange={submitChanges}
                    />
                    <input type="number"
                        max={fixedMax}
                        min={fixedMin}
                        name='minPrice'
                        value={minPrice}
                        onChange={submitChanges} />
                </div>

                <SearchForm />
            </div>
        </>
    )
}

export default ProductFilter
