import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

function SearchForm() {
    const context = useContext(AppContext);
    const { search } = context;

    return (
        <>
            <form>
                <input type='text'  onChange={search} />
                <button type='submit' >Seacrh</button>
            </form>

        </>
    )
}

export default SearchForm
