import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Product from '../components/Product';
import ProductFilter from '../components/ProductFilter'
import SearchForm from '../components/SearchForm'

function Products() {
    const context = useContext(AppContext);
    const { filteredProducts, current } = context;

    return (
        <div>
            <ProductFilter />
            <SearchForm />
            {filteredProducts.map((product, i) => {
                return (
                    <Product
                        key={i}
                        id={product.id}
                        title={product.title}
                        img={product.img}
                        price={product.price}>
                    </Product>
                )
            })}
        </div>
    )
}

export default Products
