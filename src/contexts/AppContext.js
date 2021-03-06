import React, { Component } from 'react'
import items from '../data'

const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        products: [],
        categories: [],
        current: '',
        maxPrice: 0,
        minPrice: 0,
        price: 0,
        filteredProducts: [],
    }

    componentDidMount() {
        this.setState({
            products: items,
            categories: this.getUniqueCategories(items, 'category'),
            current: 'all',
            maxPrice: this.getMaxMinPrice('max'),
            minPrice: this.getMaxMinPrice('min'),
            price: this.getMaxMinPrice('max'),
            fixedMax: this.getMaxMinPrice('max'),
            fixedMin: this.getMaxMinPrice('min'),
            filteredProducts: items,
        })
    }


    filterTheProduct(products) {
        let {
            current,
            maxPrice,
            minPrice,
        } = this.state;

        let array = [...products];

        new Promise((res, rej) => {
            res(() => {
                if (current !== 'all') {
                    array = array.filter(product => product.category === current)
                }

                array = array.filter(product => product.price <= maxPrice &&
                    product.price >= minPrice)
                return array;
            })
        })
            .then((res) => {
                this.setState({
                    filteredProducts: res()
                })
            })
            .catch(err => console.log(err))
    }

    getMaxMinPrice(value) {
        if (value === 'max') {
            const productsPrices = items.map(product => product.price);
            return Math.max(...productsPrices);
        } else if (value === 'min') {
            const productsPrices = items.map(product => product.price);
            return Math.min(...productsPrices);
        }
    }

    handleChange = (property, value) => {
        new Promise((res) => {
            res(this.setState({
                [property]: value
            }));
        })
            .then(res => {
                this.filterTheProduct(this.state.products)
            })
            .catch(err => console.log(err))
    }

    getUniqueCategories(array, property) {
        return [...new Set(array.map(item => item[property]))];
    }

    filter(array, property, value) {
        return [...array].filter((product, i) => product[property] === value);
    }

    search = (event) => {
        const array = [];

        for (let item of items) {
            const title = item.title.toLowerCase();
            const category = item.category.toLowerCase();

            if (title.includes(event.target.value) ||
                category.includes(event.target.value)
            ) {
                array.push(item);
            }
        }

        this.filterTheProduct(array);
    }

    getParticularProduct(products, id) {
        for (let product of products) {
            if (product.id === id) return product;
        }
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                filter: this.filter,
                handleChange: this.handleChange,
                getParticularProduct: this.getParticularProduct,
                search: this.search,
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export { AppContext, AppProvider }
