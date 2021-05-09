import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Product from '../components/Product';
import ProductFilter from '../components/ProductFilter'

function Products() {
    const context = useContext(AppContext);
    const { filteredProducts } = context;
    console.log(filteredProducts)
    return (
        <div>
            <ProductFilter />
            <div className='product-container'>
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
        </div>
    )
}

export default Products
