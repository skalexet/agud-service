import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { FaSistrix } from 'react-icons/fa'
function SearchForm() {
    const context = useContext(AppContext);
    const { search } = context;

    return (
        <>
            <form className='search-form'>
                <div>
                    <FaSistrix className="sistrix" />
                    <input type='text'  onChange={search} />
                </div>
            </form>

        </>
    )
}

export default SearchForm
